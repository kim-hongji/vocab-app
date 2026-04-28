import { useState } from "react";
import { wordGroups } from "@/data/words";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HideMeaning() {
  const [revealedGroups, setRevealedGroups] = useState<Set<number>>(new Set());
  const [revealedWords, setRevealedWords] = useState<Set<string>>(new Set());
  const [mode, setMode] = useState<"hide-meaning" | "hide-word">(
    "hide-meaning"
  );

  function toggleGroupMeaning(id: number) {
    setRevealedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleWord(key: string) {
    setRevealedWords((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function revealAll() {
    if (mode === "hide-meaning") {
      setRevealedGroups(new Set(wordGroups.map((g) => g.id)));
    } else {
      const allKeys = wordGroups.flatMap((g) =>
        g.words.map((w) => `${g.id}-${w.english}`)
      );
      setRevealedWords(new Set(allKeys));
    }
  }

  function hideAll() {
    setRevealedGroups(new Set());
    setRevealedWords(new Set());
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-2">
          <Button
            variant={mode === "hide-meaning" ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setMode("hide-meaning");
              hideAll();
            }}
          >
            뜻 가리기
          </Button>
          <Button
            variant={mode === "hide-word" ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setMode("hide-word");
              hideAll();
            }}
          >
            단어 가리기
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={revealAll}>
            전체 보기
          </Button>
          <Button variant="outline" size="sm" onClick={hideAll}>
            전체 가리기
          </Button>
        </div>
      </div>

      {wordGroups.map((group) => {
        const meaningRevealed = revealedGroups.has(group.id);

        return (
          <Card key={group.id} className="text-left">
            <CardContent className="py-4 px-5">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="shrink-0">
                  {group.id}
                </Badge>
                {mode === "hide-meaning" ? (
                  <button
                    onClick={() => toggleGroupMeaning(group.id)}
                    className="cursor-pointer text-left"
                  >
                    {meaningRevealed ? (
                      <span className="font-semibold text-sm sm:text-base">
                        {group.meaning}
                      </span>
                    ) : (
                      <span className="bg-muted-foreground/20 rounded px-12 py-1 text-sm text-transparent select-none">
                        ??????
                      </span>
                    )}
                  </button>
                ) : (
                  <span className="font-semibold text-sm sm:text-base">
                    {group.meaning}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {group.words.map((word) => {
                  const wordKey = `${group.id}-${word.english}`;
                  const wordRevealed = revealedWords.has(wordKey);

                  if (mode === "hide-word") {
                    return (
                      <button
                        key={word.english}
                        onClick={() => toggleWord(wordKey)}
                        className="cursor-pointer"
                      >
                        {wordRevealed ? (
                          <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-sm">
                            <span className="font-medium">{word.english}</span>
                            <span className="text-muted-foreground text-xs">
                              {word.pronunciation}
                            </span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-md bg-muted-foreground/20 px-6 py-1 text-sm text-transparent select-none">
                            ????
                          </span>
                        )}
                      </button>
                    );
                  }

                  return (
                    <span
                      key={word.english}
                      className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-sm"
                    >
                      <span className="font-medium">{word.english}</span>
                      <span className="text-muted-foreground text-xs">
                        {word.pronunciation}
                      </span>
                    </span>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
