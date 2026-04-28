import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HideMeaning } from "@/components/HideMeaning";
import { FlashCard } from "@/components/FlashCard";
import { WordList } from "@/components/WordList";

function App() {
  return (
    <div className="min-h-svh bg-background">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:py-10">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-6 sm:mb-8">
          영단어 암기장
        </h1>

        <Tabs defaultValue="hide" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="hide">뜻 가리고 외우기</TabsTrigger>
            <TabsTrigger value="flash">랜덤 플래시카드</TabsTrigger>
            <TabsTrigger value="list">전체 목록</TabsTrigger>
          </TabsList>

          <TabsContent value="hide">
            <HideMeaning />
          </TabsContent>

          <TabsContent value="flash">
            <FlashCard />
          </TabsContent>

          <TabsContent value="list">
            <WordList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
