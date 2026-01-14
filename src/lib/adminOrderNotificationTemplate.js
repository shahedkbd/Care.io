export const adminOrderNotificationTemplate = ({
  orderId,
  item,
  totalPrice,
  address,
  name,
  email,
}) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <title>New Service Booking</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f5f7fb; font-family:Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:24px;">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="padding:16px 24px; background:#0f172a;">
                <table width="100%">
                  <tr>
                    <td>
                      <img
                        src="https://i.ibb.co.com/tPb0RZxB/logo.png"
                        alt="Care.IO"
                        width="42"
                        style="vertical-align:middle;"
                      />
                    </td>
                    <td align="right" style="color:#ffffff; font-size:14px;">
                      Admin Notification
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:24px;">
                <h2 style="margin:0 0 12px; color:#111827;">
                  🚨 New Service Booking Received
                </h2>

                <p style="margin:0 0 16px; color:#374151; font-size:14px;">
                  A new service booking has been placed. Details are below.
                </p>

                <!-- Order Info -->
                <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">
                  <tr>
                    <td style="padding:6px 0; color:#6b7280;">Order ID</td>
                    <td align="right" style="padding:6px 0; font-weight:bold;">#${orderId}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0; color:#6b7280;">Service</td>
                    <td align="right" style="padding:6px 0;">${item}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0; color:#6b7280;">Total Price</td>
                    <td align="right" style="padding:6px 0; font-weight:bold;">৳ ${totalPrice}</td>
                  </tr>
                </table>

                <hr style="border:none; border-top:1px solid #e5e7eb; margin:20px 0;" />

                <!-- Customer Info -->
                <h3 style="margin:0 0 8px; color:#111827; font-size:16px;">
                  Customer Information
                </h3>

                <p style="margin:4px 0; font-size:14px;">
                  <strong>Name:</strong> ${name}
                </p>
                <p style="margin:4px 0; font-size:14px;">
                  <strong>Email:</strong> ${email}
                </p>
                <p style="margin:4px 0; font-size:14px;">
                  <strong>Address:</strong> ${address}
                </p>

                <!-- Status -->
                <div style="margin-top:20px; padding:12px; background:#fef3c7; border-radius:6px; font-size:14px;">
                  ⏳ <strong>Status:</strong> Pending Approval
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:16px; text-align:center; font-size:12px; color:#6b7280; background:#f9fafb;">
                © ${new Date().getFullYear()} Care.IO — Admin Panel Notification
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
};
