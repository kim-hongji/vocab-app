import { useState, useCallback } from "react";
import { getAllWords, shuffleArray } from "@/data/words";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type FlashWord = ReturnType<typeof getAllWords>[number];

export function FlashCard() {
  const [queue, setQueue] = useState<FlashWord[]>(() =>
    shuffleArray(getAllWords())
  );
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const current = queue[index];
  const total = queue.length;

  const next = useCallback(() => {
    if (index < total - 1) {
      setIndex((i) => i + 1);
    } else {
      setQueue(shuffleArray(getAllWords()));
      setIndex(0);
    }
    setRevealed(false);
  }, [index, total]);

  const reshuffle = useCallback(() => {
    setQueue(shuffleArray(getAllWords()));
    setIndex(0);
    setRevealed(false);
  }, []);

  if (!current) return null;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span>
          {index + 1} / {total}
        </span>
        <Button variant="ghost" size="sm" onClick={reshuffle}>
          다시 섞기
        </Button>
      </div>

      <Card className="w-full max-w-md mx-auto">
        <CardContent className="py-10 px-6 flex flex-col items-center gap-6">
          <p className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-500">
            {current.english}
          </p>
          <p className="text-muted-foreground text-sm">
            {current.pronunciation}
          </p>

          {revealed ? (
            <div className="flex flex-col items-center gap-2 animate-in fade-in duration-300">
              <Badge variant="outline" className="h-auto text-base px-5 py-3">
                {current.meaning}
              </Badge>
              <span className="text-xs text-muted-foreground">
                그룹 {current.groupId}
              </span>
            </div>
          ) : (
            <Button
              variant="secondary"
              size="lg"
              className="mt-2"
              onClick={() => setRevealed(true)}
            >
              정답 보기
            </Button>
          )}
        </CardContent>
      </Card>

      <div className="flex gap-3">
        {revealed && (
          <Button size="lg" onClick={next}>
            {index < total - 1 ? "다음 단어" : "처음부터 다시"}
          </Button>
        )}
      </div>
    </div>
  );
}
