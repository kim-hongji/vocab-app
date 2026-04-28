import { useState } from "react";
import { wordGroups } from "@/data/words";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function WordList() {
  const [hiddenMeanings, setHiddenMeanings] = useState<Set<number>>(new Set());
  const [hideAll, setHideAll] = useState(false);

  function toggleGroup(id: number) {
    setHiddenMeanings((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleAll() {
    if (hideAll) {
      setHiddenMeanings(new Set());
    } else {
      setHiddenMeanings(new Set(wordGroups.map((g) => g.id)));
    }
    setHideAll(!hideAll);
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button variant="outline" size="sm" onClick={toggleAll}>
          {hideAll ? "전체 뜻 보기" : "전체 뜻 가리기"}
        </Button>
      </div>

      {wordGroups.map((group) => {
        const isHidden = hiddenMeanings.has(group.id);
        return (
          <Card key={group.id} className="text-left">
            <CardContent className="py-4 px-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2 min-w-0">
                  <Badge variant="secondary" className="shrink-0">
                    {group.id}
                  </Badge>
                  <button
                    onClick={() => toggleGroup(group.id)}
                    className="font-semibold text-sm sm:text-base cursor-pointer hover:text-primary/70 transition-colors text-left"
                  >
                    {isHidden ? (
                      <span className="text-muted-foreground italic">
                        클릭하여 뜻 보기
                      </span>
                    ) : (
                      group.meaning
                    )}
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.words.map((word) => (
                  <span
                    key={word.english}
                    className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-sm"
                  >
                    <span className="font-medium">{word.english}</span>
                    <span className="text-muted-foreground text-xs">
                      {word.pronunciation}
                    </span>
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
