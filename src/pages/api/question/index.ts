import { NextApiRequest } from "next";

export const QUESTIONS = [
  {
    id: 1,
    category: 1,
    name: "Lợi ích khi liên kết MoMo với tài khoản ngân hàng",
    content:
      '<p><span style="color:rgba(0,0,0,0.85);">Liên kết MoMo với tài khoản ngân hàng để:</span><br><br><span style="color:rgba(0,0,0,0.85);">1. Xác thực tài khoản MoMo và nâng hạn mức thanh toán hoặc rút tiền lên đến&nbsp;20.000.000đ mỗi ngày.</span><br><br><span style="color:rgba(0,0,0,0.85);">2. Không cần phải nhập lại thông tin tài khoản ngân hàng mỗi lần giao dịch.</span><br><br><span style="color:rgba(0,0,0,0.85);">3. Nạp tiền vào MoMo từ tài khoản ngân hàng hoàn toàn miễn phí.</span><br><br><span style="color:rgba(0,0,0,0.85);">4. Rút tiền từ MoMo về tài khoản ngân hàng dễ dàng, ngay lập tức.</span><br><br><span style="color:rgba(0,0,0,0.85);">5. Nhận ngay quà tặng 100.000đ để trải nghiệm các dịch vụ trên MoMo</span></p>',
  },
  {
    id: 2,
    category: 1,
    name: "Cách liên kết MoMo với tài khoản ngân hàng Việt Nam Phương Đông (OCB)",
    content:
      '<p><span style="color:rgba(0,0,0,0.85);">Trong trường hợp bạn không nhận được mã OTP trong vòng 30 giây, bạn có thể nhấn vào "Gửi lại" để hệ thống gửi lại một mã OTP khác cho bạn.</span><br><br><span style="color:rgba(0,0,0,0.85);">Trường hợp vẫn không nhận được mã OTP, có thể do lỗi kết nối mạng. Vui lòng thử lại sau một lúc, hoặc liên hệ với bộ phận CSKH qua số 1900 54 54 41 hoặc 028 399 17 199 để được hỗ trợ.</span></p><p>&nbsp;</p><p><span style="color:rgba(0,0,0,0.85);">Trong trường hợp bạn không nhận được mã OTP trong vòng 30 giây, bạn có thể nhấn vào "Gửi lại" để hệ thống gửi lại một mã OTP khác cho bạn.</span><br><br><span style="color:rgba(0,0,0,0.85);">Trường hợp vẫn không nhận được mã OTP, có thể do lỗi kết nối mạng. Vui lòng thử lại sau một lúc, hoặc liên hệ với bộ phận CSKH qua số 1900 54 54 41 hoặc 028 399 17 199 để được hỗ trợ.</span></p>',
  },
  {
    id: 3,
    category: 1,
    name: "Cách liên kết MoMo với tài khoản ngân hàng Vietcombank (VCB)",
    content:
      '<p style="margin-left:0px;">Khi cần&nbsp;hủy tài khoản MoMo, bạn vui lòng liên hệ với bộ phận CSKH qua số 1900 54 54 41 và cung cấp các thông tin sau:</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Họ tên chủ tài khoản</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số CMND</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số dư tài khoản MoMo</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Tài khoản ngân hàng đang liên kết (nếu có)</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Email</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Địa chỉ</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">Sau khi nhận được thông tin từ bạn, Ví MoMo sẽ chủ động xác minh và hỗ trợ hủy tài khoản.</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;"><i>Lưu ý: Trước khi bạn gửi thông tin yêu cầu hủy tài khoản, vui lòng hủy liên kết giữa tài khoản MoMo và tài khoản ngân hàng. Trong trường hợp tài khoản MoMo của bạn vẫn còn số dư, khi MoMo tiến hành hủy tài khoản, số dư trong tài khoản sẽ bị mất. Tài khoản MoMo đã hủy sẽ không thể khôi phục lại.</i></p>',
  },
  {
    id: 4,
    category: 2,
    name: "Tạo mới tài khoản",
    content:
      '<p style="margin-left:0px;">Khi cần&nbsp;hủy tài khoản MoMo, bạn vui lòng liên hệ với bộ phận CSKH qua số 1900 54 54 41 và cung cấp các thông tin sau:</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Họ tên chủ tài khoản</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số CMND</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số dư tài khoản MoMo</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Tài khoản ngân hàng đang liên kết (nếu có)</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Email</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Địa chỉ</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">Sau khi nhận được thông tin từ bạn, Ví MoMo sẽ chủ động xác minh và hỗ trợ hủy tài khoản.</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;"><i>Lưu ý: Trước khi bạn gửi thông tin yêu cầu hủy tài khoản, vui lòng hủy liên kết giữa tài khoản MoMo và tài khoản ngân hàng. Trong trường hợp tài khoản MoMo của bạn vẫn còn số dư, khi MoMo tiến hành hủy tài khoản, số dư trong tài khoản sẽ bị mất. Tài khoản MoMo đã hủy sẽ không thể khôi phục lại.</i></p>',
  },
  {
    id: 5,
    category: 3,
    name: "Nạp tiền từ thẻ quốc tế/ thẻ ATM",
    content:
      '<p style="margin-left:0px;">Khi cần&nbsp;hủy tài khoản MoMo, bạn vui lòng liên hệ với bộ phận CSKH qua số 1900 54 54 41 và cung cấp các thông tin sau:</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Họ tên chủ tài khoản</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số CMND</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số dư tài khoản MoMo</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Tài khoản ngân hàng đang liên kết (nếu có)</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Email</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Địa chỉ</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">Sau khi nhận được thông tin từ bạn, Ví MoMo sẽ chủ động xác minh và hỗ trợ hủy tài khoản.</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;"><i>Lưu ý: Trước khi bạn gửi thông tin yêu cầu hủy tài khoản, vui lòng hủy liên kết giữa tài khoản MoMo và tài khoản ngân hàng. Trong trường hợp tài khoản MoMo của bạn vẫn còn số dư, khi MoMo tiến hành hủy tài khoản, số dư trong tài khoản sẽ bị mất. Tài khoản MoMo đã hủy sẽ không thể khôi phục lại.</i></p>',
  },
  {
    id: 6,
    category: 4,
    name: "Update account 1",
    content:
      '<p style="margin-left:0px;">Khi cần&nbsp;hủy tài khoản MoMo, bạn vui lòng liên hệ với bộ phận CSKH qua số 1900 54 54 41 và cung cấp các thông tin sau:</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Họ tên chủ tài khoản</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số CMND</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số dư tài khoản MoMo</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Tài khoản ngân hàng đang liên kết (nếu có)</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Email</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Địa chỉ</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">Sau khi nhận được thông tin từ bạn, Ví MoMo sẽ chủ động xác minh và hỗ trợ hủy tài khoản.</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;"><i>Lưu ý: Trước khi bạn gửi thông tin yêu cầu hủy tài khoản, vui lòng hủy liên kết giữa tài khoản MoMo và tài khoản ngân hàng. Trong trường hợp tài khoản MoMo của bạn vẫn còn số dư, khi MoMo tiến hành hủy tài khoản, số dư trong tài khoản sẽ bị mất. Tài khoản MoMo đã hủy sẽ không thể khôi phục lại.</i></p>',
  },
  {
    id: 7,
    category: 4,
    name: "Update account 2",
    content:
      '<p style="margin-left:0px;">Khi cần&nbsp;hủy tài khoản MoMo, bạn vui lòng liên hệ với bộ phận CSKH qua số 1900 54 54 41 và cung cấp các thông tin sau:</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Họ tên chủ tài khoản</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số CMND</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số dư tài khoản MoMo</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Tài khoản ngân hàng đang liên kết (nếu có)</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Email</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Địa chỉ</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">Sau khi nhận được thông tin từ bạn, Ví MoMo sẽ chủ động xác minh và hỗ trợ hủy tài khoản.</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;"><i>Lưu ý: Trước khi bạn gửi thông tin yêu cầu hủy tài khoản, vui lòng hủy liên kết giữa tài khoản MoMo và tài khoản ngân hàng. Trong trường hợp tài khoản MoMo của bạn vẫn còn số dư, khi MoMo tiến hành hủy tài khoản, số dư trong tài khoản sẽ bị mất. Tài khoản MoMo đã hủy sẽ không thể khôi phục lại.</i></p>',
  },
  {
    id: 8,
    category: 5,
    name: "Gia đình 1",
    content:
      '<p style="margin-left:0px;">Khi cần&nbsp;hủy tài khoản MoMo, bạn vui lòng liên hệ với bộ phận CSKH qua số 1900 54 54 41 và cung cấp các thông tin sau:</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Họ tên chủ tài khoản</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số CMND</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số dư tài khoản MoMo</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Tài khoản ngân hàng đang liên kết (nếu có)</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Email</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Địa chỉ</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">Sau khi nhận được thông tin từ bạn, Ví MoMo sẽ chủ động xác minh và hỗ trợ hủy tài khoản.</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;"><i>Lưu ý: Trước khi bạn gửi thông tin yêu cầu hủy tài khoản, vui lòng hủy liên kết giữa tài khoản MoMo và tài khoản ngân hàng. Trong trường hợp tài khoản MoMo của bạn vẫn còn số dư, khi MoMo tiến hành hủy tài khoản, số dư trong tài khoản sẽ bị mất. Tài khoản MoMo đã hủy sẽ không thể khôi phục lại.</i></p>',
  },
  {
    id: 9,
    category: 5,
    name: "Gia đình 2",
    content:
      '<p style="margin-left:0px;">Khi cần&nbsp;hủy tài khoản MoMo, bạn vui lòng liên hệ với bộ phận CSKH qua số 1900 54 54 41 và cung cấp các thông tin sau:</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Họ tên chủ tài khoản</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số CMND</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số dư tài khoản MoMo</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Tài khoản ngân hàng đang liên kết (nếu có)</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Email</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Địa chỉ</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">Sau khi nhận được thông tin từ bạn, Ví MoMo sẽ chủ động xác minh và hỗ trợ hủy tài khoản.</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;"><i>Lưu ý: Trước khi bạn gửi thông tin yêu cầu hủy tài khoản, vui lòng hủy liên kết giữa tài khoản MoMo và tài khoản ngân hàng. Trong trường hợp tài khoản MoMo của bạn vẫn còn số dư, khi MoMo tiến hành hủy tài khoản, số dư trong tài khoản sẽ bị mất. Tài khoản MoMo đã hủy sẽ không thể khôi phục lại.</i></p>',
  },
  {
    id: 10,
    category: 6,
    name: "Gia đình 2",
    content:
      '<p style="margin-left:0px;">Khi cần&nbsp;hủy tài khoản MoMo, bạn vui lòng liên hệ với bộ phận CSKH qua số 1900 54 54 41 và cung cấp các thông tin sau:</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Họ tên chủ tài khoản</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số CMND</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số dư tài khoản MoMo</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Tài khoản ngân hàng đang liên kết (nếu có)</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Email</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Địa chỉ</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">Sau khi nhận được thông tin từ bạn, Ví MoMo sẽ chủ động xác minh và hỗ trợ hủy tài khoản.</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;"><i>Lưu ý: Trước khi bạn gửi thông tin yêu cầu hủy tài khoản, vui lòng hủy liên kết giữa tài khoản MoMo và tài khoản ngân hàng. Trong trường hợp tài khoản MoMo của bạn vẫn còn số dư, khi MoMo tiến hành hủy tài khoản, số dư trong tài khoản sẽ bị mất. Tài khoản MoMo đã hủy sẽ không thể khôi phục lại.</i></p>',
  },
  {
    id: 11,
    category: 6,
    name: "Gia đình 2",
    content:
      '<p style="margin-left:0px;">Khi cần&nbsp;hủy tài khoản MoMo, bạn vui lòng liên hệ với bộ phận CSKH qua số 1900 54 54 41 và cung cấp các thông tin sau:</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Họ tên chủ tài khoản</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số CMND</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Số dư tài khoản MoMo</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Tài khoản ngân hàng đang liên kết (nếu có)</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Email</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">- Địa chỉ</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">Sau khi nhận được thông tin từ bạn, Ví MoMo sẽ chủ động xác minh và hỗ trợ hủy tài khoản.</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;"><i>Lưu ý: Trước khi bạn gửi thông tin yêu cầu hủy tài khoản, vui lòng hủy liên kết giữa tài khoản MoMo và tài khoản ngân hàng. Trong trường hợp tài khoản MoMo của bạn vẫn còn số dư, khi MoMo tiến hành hủy tài khoản, số dư trong tài khoản sẽ bị mất. Tài khoản MoMo đã hủy sẽ không thể khôi phục lại.</i></p>',
  },
];

const questions = (req: NextApiRequest, res: any) => {
  const category = req.query.category as string;

  res
    .status(200)
    .json(
      QUESTIONS?.filter((item) =>
        req?.query?.category ? category === item.category.toString() : true
      )
    );
};

export default questions;
