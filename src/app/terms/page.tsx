import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Điều khoản dịch vụ",
  description: "Điều khoản sử dụng dịch vụ của chúng tôi",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-10 px-5 py-10 leading-7">
      <div className="mx-auto text-center">
        <h2 className="py-5 text-3xl">CHĂM SÓC KHÁCH HÀNG</h2>
        <p>
          Tại Tạp hóa Thu Đạt, sự hài lòng của khách hàng là ưu tiên hàng đầu
          của chúng tôi. Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ bạn
          với bất kỳ câu hỏi hoặc yêu cầu nào. Cho dù bạn cần trợ giúp về thông
          tin sản phẩm, đơn hàng, hay chính sách hoàn trả, chúng tôi luôn cam
          kết mang đến dịch vụ tốt nhất.
        </p>
        <p>
          Vui lòng liên hệ với chúng tôi qua điện thoại, email, hoặc hệ thống hỗ
          trợ trực tuyến để được giải đáp nhanh chóng và hiệu quả. Chúng tôi
          luôn nỗ lực để mang đến trải nghiệm mua sắm tuyệt vời nhất cho bạn.
        </p>
        <h2 className="mt-10 py-5 text-3xl">CHÍNH SÁCH BẢO MẬT & AN TOÀN</h2>
        <p>
          Tại Tạp hóa Thu Đạt, chúng tôi cam kết bảo vệ thông tin cá nhân của
          bạn. Tất cả dữ liệu được thu thập sẽ được sử dụng nhằm mang lại trải
          nghiệm mua sắm an toàn và hiệu quả nhất. Chúng tôi đảm bảo rằng mọi
          thông tin cá nhân của bạn được bảo mật tuyệt đối và không chia sẻ với
          bất kỳ bên thứ ba nào mà không có sự đồng ý của bạn.
        </p>
        <p>
          Hệ thống của chúng tôi được trang bị các biện pháp bảo mật tiên tiến
          để bảo vệ dữ liệu khỏi những rủi ro không mong muốn. Hãy yên tâm khi
          mua sắm tại Tạp hóa Thu Đạt, vì sự an toàn và bảo mật của bạn là trách
          nhiệm hàng đầu của chúng tôi.
        </p>
        <h2 className="mt-10 py-5 text-3xl">YÊU CẦU MUA SỈ</h2>
        <p>
          Tại Tạp hóa Thu Đạt, chúng tôi luôn chào đón các đối tác có nhu cầu
          mua sỉ các sản phẩm với số lượng lớn. Chúng tôi cung cấp nhiều loại
          mặt hàng đa dạng, chất lượng cao, và giá cả cạnh tranh, đáp ứng tốt
          các yêu cầu của khách hàng kinh doanh.
        </p>
        <p>
          Nếu bạn có nhu cầu hợp tác hoặc đặt mua sỉ, vui lòng liên hệ trực tiếp
          với chúng tôi qua email hoặc số điện thoại. Đội ngũ kinh doanh của
          chúng tôi sẽ hỗ trợ bạn một cách nhanh chóng và chuyên nghiệp, đảm bảo
          mọi thắc mắc của bạn được giải quyết một cách thỏa đáng.
        </p>
        <h2 className="mt-10 py-5 text-3xl">PHƯƠNG THỨC THANH TOÁN</h2>
        <p>
          - Thẻ tín dụng / Thẻ ghi nợ
          <br /> - PAYPAL
          <br /> - Thanh toán trực tiếp
        </p>
      </div>
    </main>
  );
}
