"use client";
import { useCustomToast } from "@/hooks/use-custom-toast";
import { usePrevious } from "@mantine/hooks";
import { VoteType } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { ArrowBigUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  postId: string;
  initialVotesAmt: number;
  intitialVote?: VoteType | null;
}

const PostVoteClient = ({ initialVotesAmt, postId, intitialVote }: Props) => {
  const { loginToast } = useCustomToast();

  const [votesAmt, setVotesAmt] = useState<number>(initialVotesAmt);
  const [currentVote, setCurrentVote] = useState(intitialVote);
  const prevVote = usePrevious(currentVote);

  useEffect(() => {
    setCurrentVote(intitialVote);
  }, [intitialVote]);

  return (
    // <div className="flex gap-4 pb-4 pr-6 sm:flex-col sm:gap-0 sm:w-20 sm:pb-0">
    <div className="flex flex-col gap-4 pb-4 pr-6 sm:gap-0 sm:w-20 sm:pb-0">
      <Button size={"sm"} variant={"ghost"} aria-label="upvote">
        <ArrowBigUp
          className={cn("h-5, w-5 text-zinc-700", {
            "text-emerald-500 fill-emerald-500": currentVote === "UP",
          })}
        />
      </Button>

      <p className="py-2 text-sm font-medium text-center text-zinc-900">
        {votesAmt}
      </p>

      <Button size={"sm"} variant={"ghost"} aria-label="downvote">
        <ArrowBigUp
          className={cn("h-5, w-5 text-zinc-700", {
            "text-red-500 fill-red-500": currentVote === "DOWN",
          })}
        />
      </Button>
    </div>
  );
};

export default PostVoteClient;
