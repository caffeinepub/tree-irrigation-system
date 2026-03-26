import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitQuoteRequest() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      selectedPlan: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitQuoteRequest(
        data.name,
        data.email,
        data.selectedPlan,
        data.message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quotes"] });
    },
  });
}
