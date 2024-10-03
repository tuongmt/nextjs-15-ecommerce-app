import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import youtubeIcon from "@/assets/youtube-icon.svg";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-secondary py-4 sm:pt-16 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-12 gap-y-16 md:col-span-3 lg:grid-cols-6">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <a href="#">
              <Image src={logo} alt="logo" width="120" />
            </a>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Sự hài lòng của bạn là niềm vinh hạnh của chúng tôi.
            </p>

            <ul className="mt-7 flex items-center space-x-3">
              <li>
                <a
                  href="https://www.facebook.com/tuongmt03"
                  title=""
                  className="flex size-7 items-center justify-center rounded-full bg-foreground text-background transition-all duration-200 hover:bg-primary focus:bg-primary"
                >
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/@tuongmt"
                  title=""
                  className="flex size-7 items-center justify-center rounded-full bg-foreground text-background transition-all duration-200 hover:bg-primary focus:bg-primary"
                >
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="youtube"
                    fill="#fff"
                  >
                    <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Hộ kinh doanh
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href=""
                  title=""
                  className="flex text-base transition-all duration-200 hover:text-primary focus:text-primary"
                >
                  {" "}
                  Về chúng tôi{" "}
                </a>
              </li>

              <li>
                <a
                  href=""
                  title=""
                  className="flex text-base transition-all duration-200 hover:text-primary focus:text-primary"
                >
                  {" "}
                  Nét đặc trưng{" "}
                </a>
              </li>

              <li>
                <a
                  href=""
                  title=""
                  className="flex text-base transition-all duration-200 hover:text-primary focus:text-primary"
                >
                  {" "}
                  Việc làm{" "}
                </a>
              </li>

              <li>
                <a
                  href=""
                  title=""
                  className="flex text-base transition-all duration-200 hover:text-primary focus:text-primary"
                >
                  {" "}
                  Nghề nghiệp{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Hỗ trợ
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href=""
                  title=""
                  className="transition-all duration-200 hover:text-primary focus:text-primary"
                >
                  {" "}
                  Chăm sóc khách hàng{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base transition-all duration-200 hover:text-primary focus:text-primary"
                >
                  {" "}
                  Chi tiết giao hàng{" "}
                </a>
              </li>

              <li>
                <a
                  href="/terms"
                  title=""
                  className="flex text-base transition-all duration-200 hover:text-primary focus:text-primary"
                >
                  {" "}
                  Điều khoản dịch vụ{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base transition-all duration-200 hover:text-primary focus:text-primary"
                >
                  {" "}
                  Chính sách bảo mật{" "}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Đăng ký nhận bản tin
            </p>

            <form action="#" method="POST" className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Nhập email của bạn"
                  className="block w-full"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-3 inline-flex items-center justify-center rounded-md bg-primary px-6 py-4"
              >
                Đăng ký
              </Button>
            </form>
          </div>
        </div>

        <hr className="mb-10 mt-16" />

        <p className="text-center text-sm text-muted-foreground">
          © Copyright {new Date().getFullYear()}, Bản quyền thuộc sở hữu bởi
          Tạp hóa Thu Đạt
        </p>
      </div>
    </footer>
  );
}
