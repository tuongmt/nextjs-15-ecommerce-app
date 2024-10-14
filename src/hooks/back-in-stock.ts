import { wixBrowserClient } from "@/lib/wix-client.browser";
import {
    BackInStockNotificationRequestValues,
    createBackInStockNotificationRequest,
} from "@/wix-api/backInStockNotification";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "./use-toast";

export function useCreateBackInStockNotificationRequest() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: (values: BackInStockNotificationRequestValues) =>
      createBackInStockNotificationRequest(wixBrowserClient, values),
    onError(error) {
      console.error(error);
      if (
        (error as any).details.applicationError.code ===
        "BACK_IN_STOCK_NOTIFICATION_REQUEST_ALREADY_EXISTS"
      ) {
        toast({
          variant: "destructive",
          description: "Bạn đã đăng ký sản phẩm này rồi.",
        });
      } else {
        toast({
          variant: "destructive",
          description: "Đã xảy ra lỗi. Vui lòng thử lại.",
        });
      }
    },
  });
}
