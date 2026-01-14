import Image from "next/image";

export const ServiceBookedInvoice = ({ orderId, item , totalPrice }) => {
  return (
    `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <title>Care.IO Service Invoice</title>
  </head>

  <body style="margin:0; padding:0; background-color:#f4f6f8; font-family: Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center" style="padding:20px 0;">
          
          <!-- Main Container -->
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:6px; padding:20px;">

            <!-- Header -->
            <tr>
              <td style="border-bottom:1px solid #e5e7eb; padding-bottom:15px;">
                <table width="100%">
                  <tr>
                    <td>
                      <img
                        src="https://i.ibb.co.com/tPb0RZxB/logo.png"
                        alt="Care.IO"
                        width="48"
                        style="vertical-align:middle;"
                      />
                      <span style="font-size:20px; font-weight:bold; margin-left:10px; vertical-align:middle;">
                        Care.IO
                      </span>
                    </td>
                    <td align="right" style="font-size:12px; color:#6b7280;">
                      <strong>Invoice</strong><br/>
                      Order ID: ${orderId}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:20px 0;">
                <table width="100%" cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
                  <tr style="border-bottom:1px solid #e5e7eb; font-size:13px;">
                    <th align="left">Service</th>
                    <th align="left">Duration</th>
                    <th align="left">Unit Price</th>
                    <th align="right">Total</th>
                  </tr>

                  <tr style="border-bottom:1px solid #e5e7eb; font-size:13px;">
                    <td>${item.title}</td>
                    <td>${item.duration} ${item.durationType}</td>
                    <td>৳${item.unitPrice}</td>
                    <td align="right">৳${item.unitPrice * item.duration}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Total -->
            <tr>
              <td style="background:#f3f4f6; padding:15px; border-radius:4px;">
                <table width="100%">
                  <tr>
                    <td style="font-size:16px; font-weight:bold;">
                      Total Payable
                    </td>
                    <td align="right" style="font-size:18px; font-weight:bold; color:#2563eb;">
                      ৳${totalPrice}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding-top:20px; font-size:12px; color:#6b7280; text-align:center;">
                Thank you for choosing <strong>Care.IO</strong><br/>
                Trusted baby sitting, elderly care & sick people care services.
                <br/><br/>
                Booking Status: <strong>Pending</strong>
              </td>
            </tr>

          </table>
          <!-- End Container -->

        </td>
      </tr>
    </table>
  </body>
  </html>`
  );
};

