const nodemailer = require('nodemailer');
const { EMAIL_ADDRESS ,EMAIL_PASSWORD} = process.env;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_ADDRESS,
    pass: EMAIL_PASSWORD
  }
});

const sendEmail = (req, res) => {
  const { to, subject, text ,information ,roleList,name,photoUrl,title} = req.body;
  console.log(to, subject, text,information,roleList,name,photoUrl,title);


const htmlContent = `
<html lang="und">
  <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700" />

    <title></title>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->

    <style></style>
  </head>
  <body>
    <div style="font-size: 0px; line-height: 1px; mso-line-height-rule: exactly; display: none; max-width: 0px; max-height: 0px; opacity: 0; overflow: hidden; mso-hide: all"></div>
    <center lang="und" dir="auto" style="width: 100%; table-layout: fixed; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%">
      <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="360" style="width: 360px; border-spacing: 0; font-family: Noto Sans TC">
        <tr>
          <td bgcolor="#59b6b2" width="100.00%" height="833" style="background-color: #59b6b2; width: 100%; height: 833px">
            <table class="force-w100" background="assets/table__13keh6j_436354.png" cellpadding="0" cellspacing="0" border="0" role="presentation" width="360" height="833" style="background: url('assets/table__13keh6j_331c10.png') 50% / contain no-repeat; width: 360px; height: 833px; border-spacing: 0">
              <!--[if gte mso 9]> <v:image alt="background-image" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style=" border: 0;display: inline-block; width: 270.00pt; height: 624.75pt;" src="assets/table__13keh6j_436354.png" /> <v:rect alt="background-image-rectangle" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style=" border: 0;display: inline-block;position: absolute; width: 270.00pt; height:624.75pt;"> <v:fill opacity="0%" color="#FFFFFF/> <v:textbox inset="0,0,0,0"> <![endif]-->
              <tr>
                <td align="left" width="100.00%" style="padding-bottom: 15.5px; width: 100%">
                  <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100.00%" style="width: 100%; border-spacing: 0">
                    <tr>
                      <td style="padding-left: 130px">
                        <table background="assets/table_1kueeoo_b40c15.png" cellpadding="0" cellspacing="0" border="0" role="presentation" width="100.00%" height="113" style="background: url('assets/table_1kueeoo_641a3b.png') 50% / contain no-repeat; width: 100%; height: 113px; border-spacing: 0">
                          <!--[if gte mso 9]> <v:image alt="background-image" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style=" border: 0;display: inline-block; width: 172.50pt; height: 84.75pt;" src="assets/table_1kueeoo_b40c15.png" /> <v:rect alt="background-image-rectangle" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style=" border: 0;display: inline-block;position: absolute; width: 172.50pt; height:84.75pt;"> <v:fill opacity="0%" color="#FFFFFF/> <v:textbox inset="0,0,0,0"> <![endif]-->
                          <tr>
                            <td align="right" valign="top" style="padding-top: 0; padding-bottom: 24px">
                              <img src="assets/img_2838_6759_281147.png" width="144" style="max-width: initial; width: 144px; display: block" />
                            </td>
                          </tr>
                          <!--[if gte mso 9]> </v:textbox> </v:fill> </v:rect> </v:image> <![endif]-->
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center" style="padding-top: 15.5px; padding-bottom: 12.5px">
                  <table cellpadding="0" cellspacing="0" border="0" role="presentation" bgcolor="white" width="312" height="443" style="border-radius: 16px; background-color: white; width: 312px; height: 443px; border-spacing: 0">
                    <tr>
                      <td align="left" valign="top" width="100.00%" style="padding-top: 27px; padding-bottom: 24px; width: 100%">
                        <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100.00%" style="width: 100%; border-spacing: 0">
                          <tr>
                            <td style="padding-left: 20px">
                              <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100.00%" style="width: 100%; border-spacing: 0">
                                <tr>
                                  <td align="left" style="padding-bottom: 8.5px; padding-left: 55px">
                                    <p style="font-size: 18px; font-weight: 700; color: #536166; margin: 0; padding: 0; line-height: 18px; mso-line-height-rule: exactly">${req.body.title}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="left" width="100.00%" style="padding-top: 8.5px; padding-bottom: 10px; width: 100%">
                                    <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100.00%" style="width: 100%; border-spacing: 0">
                                      <tr>
                                        <td style="padding-right: 20px">
                                          <table cellpadding="0" cellspacing="0" border="0" role="presentation" width="100.00%" style="width: 100%; border-spacing: 0">
                                            <tr>
                                              <td width="100.00%" style="padding-bottom: 10px; width: 100%">
                                                <table cellpadding="0" cellspacing="0" border="0" role="presentation" bgcolor="#def5f5" width="100.00%" height="64" style="border-radius: 16px; background-color: #def5f5; width: 100%; height: 64px; border-spacing: 0">
                                                  <tr>
                                                    <td align="left" valign="middle" style="padding-left: 12px">
                                                      <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-spacing: 0">
                                                        <tr>
                                                          <td valign="top" style="padding-right: 4px">
                                                            <img src=${req.body.photoUrl} width="40" style="border: none; border-radius: 50%; max-width: initial; width: 40px; display: block" />
                                                          </td>
                                                          <td valign="top" style="padding-top: 4px; padding-bottom: 2px; padding-left: 8px">
                                                            <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-spacing: 0">
                                                              <tr>
                                                                <td style="padding-bottom: 3.5px">
                                                                  <p style="font-size: 14px; font-weight: 500; color: #293a3d; margin: 0; padding: 0; line-height: 14px; mso-line-height-rule: exactly">${req.body.name}</p>
                                                                </td>
                                                              </tr>
                                                              <tr>
                                                                <td style="padding-top: 3.5px">
                                                                  <p style="font-size: 12px; font-weight: 500; color: #536166; margin: 0; padding: 0; line-height: 13px; mso-line-height-rule: exactly">${req.body.roleList[0]}</p>
                                                                </td>
                                                              </tr>
                                                            </table>
                                                          </td>
                                                        </tr>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </table>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td style="padding-top: 10px">
                                                <!--[if mso]> <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="272px" height="144px" style=" width:272px; height:144px;"> <tr> <td> <![endif]-->
                                                <p width="272" height="144" style="font-size: 14px; font-weight: 400; text-align: left; line-height: 140%; color: #536166; mso-line-height-rule: exactly; margin: 0; padding: 0; width: 272px; height: 144px">${req.body.text}</p>
                                                <!--[if mso]></td></tr></table><![endif]-->
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding-top: 10px; padding-bottom: 10.5px">
                                    <!--[if mso]> <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="292px" height="1px" style=" width:292px; height:1px;"> <tr> <td> <![endif]-->
                                    <div bgcolor="#f3f3f3" height="1" width="292" style="background-color: #f3f3f3; height: 1px; width: 292px"></div>
                                    <!--[if mso]></td></tr></table><![endif]-->
                                  </td>
                                </tr>
                                <tr>
                                  <td align="left" style="padding-top: 10.5px; padding-bottom: 4.5px">
                                    <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-spacing: 0">
                                      <tr>
                                        <td valign="middle">
                                          <img src="assets/img_2838_6791_44ce53.png" width="18.00" height="18.00" style="width: 18px; height: 18px; display: block" />
                                        </td>
                                        <td valign="middle" style="padding-left: 8px">
                                          <p style="font-size: 14px; font-weight: 700; color: #536166; margin: 0; padding: 0; line-height: 18px; mso-line-height-rule: exactly">歡迎用以下的方式聯繫我</p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style="padding-top: 4.5px">
                                    <!--[if mso]> <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="272px" height="60px" style=" width:272px; height:60px;"> <tr> <td> <![endif]-->
                                    <p width="272" height="60" style="font-size: 14px; font-weight: 400; text-align: left; line-height: 140%; color: #536166; mso-line-height-rule: exactly; margin: 0; padding: 0; width: 272px; height: 60px">${req.body.information[0]??''}<br />${req.body.information[1]??''}<br />${req.body.information[2]??''}<br />${req.body.information[3]??''}</p>
                                    <!--[if mso]></td></tr></table><![endif]-->
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td width="100.00%" style="padding-top: 12.5px; width: 100%">
                  <table background="assets/table_17ub8dg_580208.png" cellpadding="0" cellspacing="0" border="0" role="presentation" width="100.00%" height="221" style="background: url('assets/table_17ub8dg_fa0f93.png') 50% / contain no-repeat; width: 100%; height: 221px; border-spacing: 0">
                    <!--[if gte mso 9]> <v:image alt="background-image" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style=" border: 0;display: inline-block; width: 270.00pt; height: 165.75pt;" src="assets/table_17ub8dg_580208.png" /> <v:rect alt="background-image-rectangle" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style=" border: 0;display: inline-block;position: absolute; width: 270.00pt; height:165.75pt;"> <v:fill opacity="0%" color="#FFFFFF/> <v:textbox inset="0,0,0,0"> <![endif]-->
                    <tr>
                      <td valign="top" width="100.00%" style="padding-top: 75px; width: 100%">
                        <table cellpadding="0" cellspacing="0" border="0" role="presentation" bgcolor="#536166" width="100.00%" height="146" style="background-color: #536166; width: 100%; height: 146px; border-spacing: 0">
                          <tr>
                            <td align="center" valign="top" style="padding-top: 35px; padding-bottom: 37px">
                              <table align="center" cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-spacing: 0">
                                <tr>
                                  <td align="center" style="padding-bottom: 12px">
                                    <table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-spacing: 0">
                                      <tr>
                                        <td style="padding-right: 12px">
                                          <img src="assets/img_2838_6679_7cc9eb.png" width="36" style="max-width: initial; width: 36px; display: block" />
                                        </td>
                                        <td style="padding-left: 8px; padding-right: 12px">
                                          <img src="assets/img_2838_6685_776541.png" width="36.00" height="36.00" style="width: 36px; height: 36px; display: block" />
                                        </td>
                                        <td style="padding-left: 8px; padding-right: 12px">
                                          <img src="assets/img_2838_6689_cda7d2.png" width="36" style="max-width: initial; width: 36px; display: block" />
                                        </td>
                                        <td style="padding-left: 8px">
                                          <img src="assets/img_2838_6696_610c60.png" width="36" style="max-width: initial; width: 36px; display: block" />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" style="padding-top: 12px">
                                    <p style="font-size: 14px; font-weight: 400; color: #dbdbdb; margin: 0; padding: 0; line-height: 14px; mso-line-height-rule: exactly">Tomorrow will be fine. 島島阿學 © 2021.</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <!--[if gte mso 9]> </v:textbox> </v:fill> </v:rect> </v:image> <![endif]-->
                  </table>
                </td>
              </tr>
              <!--[if gte mso 9]> </v:textbox> </v:fill> </v:rect> </v:image> <![endif]-->
            </table>
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>
`;
  const mailOptions = {
    from: EMAIL_ADDRESS,
    to,
    subject,
    html: htmlContent
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    }
  });
};

module.exports = sendEmail;
