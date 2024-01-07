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

//   const htmlContent = `
//   <html>
//     <head>
//       <style>
//         body {
//           font-family: Noto Sans TC;
//           font-style: normal;
//           line-height: 140%;
//         }
//         .container {
//           width: 800px;
//           height: 925px;
//           max-width: 800px;
//           margin: 0 auto;
//           background-color: #59B6B2;
//         }
//         .content{
//           width: 400px;
//           display: inline-flex;
//           padding: 32px 40px;
//           flex-direction: column;
//           align-items: center;
//           gap: 20px;
//           border-radius: 16px;
//           background: #FFF;
//         }
//         .title{
//           color: var(--black-white-gray, #536166);
//           text-align: center;
//           font-size: 22px;
//           font-weight: 700;
//           margin-bottom: 20px;
//         }
//         .sender{
//           display: flex;
//           padding: 12px;
//           align-items: center;
//           gap: 12px;
//           align-self: stretch;
//           border-radius: 16px;
//           background: var(--LOGO-LOGO-Very-Light, #DEF5F5);
//         }
//         .senderInfo{
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: flex-start;
//           gap: var(--borderRadius, 4px);
//           flex: 1 0 0;
//           h2{
//             color: var(--black-white-gray-dark, #293A3D);
//             font-size: 16px;
//             font-weight: 500;      
//           }
//           p{
//             color: var(--black-white-gray, #536166);
//             font-size: 14px;
//             font-weight: 400;      
//           }          
//         }
//         .text{
//           width:100%;
//           height:auto;
//           color: var(--black-white-gray, #536166);
//           font-size: 14px;
//           font-weight: 400;
//           margin: 20px 0;
//         }
//         .information{
//           padding-top: 20px;
//           border-top: 1px solid #F3F3F3;
//           h1{
//             color: var(--black-white-gray, #536166);
//             font-size: 14px;
//             font-weight: 700;         
//           }
//           p{
//             color: var(--black-white-gray, #536166);
//             font-size: 14px;
//             font-weight: 400;
//           }
//         }
//         .footer {
//           width: 800px;
//           max-width: 800px;
//           margin: 0 auto;
//           background-color: #536166;
//         }
//       </style>
//     </head>
//     <body>
//       <div class="container" style="width: 800px; height: 925px; max-width: 800px; margin: 0 auto; background-color: #59B6B2;">
//         <div class="content">
//           <div class="title">
//             <h1>${req.body.title}</h1>
//           <div>
//           <div class="sender">
//             <img src=${req.body.photoUrl}>
//             <div class="senderInfo">
//               <h2>${req.body.name}</h2>
//               <p>${req.body.roleList[0]}</p>
//             </div>
//           </div>
//           <div class="text">
//             <p>${req.body.text}</p>
//           </div>
//           <div class="information">
//             <h1>歡迎使用以下的聯絡方式聯繫我</h1>
//             <p>${req.body.information}</p>
//           </div>
//         </div>
//       </div>
//       <div class="footer">
//         <div class="icon">
//           <a href="">
//             <img src="">
//           </a>
//           <a href="">
//             <img src="">
//           </a>
//           <a href="">
//             <img src="">
//           </a>
//           <a href="">
//             <img src="">
//           </a>
//         </div>
//         <p>
//           Tomorrow will be fine. 島島阿學 © 2021.
//         </p>
//       </div>
//     </body>
//   </html>
// `;

const htmlContent = `
  <html>
    <head>
      <style>
        body {
          font-family: Noto Sans TC;
          font-style: normal;
          line-height: 140%;
        }
      </style>
    </head>
    <body style="background-color: #59B6B2;">
      <div style="width: 800px; height: 925px; max-width: 800px; background-color: #59B6B2;">
        <div style="width: 400px;margin: 165px 160px;padding: 32px 40px; flex-direction: column; align-items: center; gap: 20px; border-radius: 16px; background: #FFF;">
          <div style="color: #536166; text-align: center; font-size: 22px; font-weight: 700; margin-bottom: 20px;">
            <h1>${req.body.title}</h1>
          </div>
          <div style="display: flex; padding: 12px; align-items: center; gap: 12px; align-self: stretch; border-radius: 16px; background: #DEF5F5;">
            <img src=${req.body.photoUrl} style="border-radius: 16px;">
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 4px; flex: 1 0 0;">
              <h2 style="color: #293A3D; font-size: 16px; font-weight: 500;">${req.body.name}</h2>
              <p style="color: #536166; font-size: 14px; font-weight: 400;">${req.body.roleList[0]}</p>
            </div>
          </div>
          <div style="width:100%; height:auto; color: #536166; font-size: 14px; font-weight: 400; margin: 20px 0;">
            <p>${req.body.text}</p>
          </div>
          <div style="padding-top: 20px; border-top: 1px solid #F3F3F3;">
            <h1 style="color: #536166; font-size: 14px; font-weight: 700;">歡迎使用以下的聯絡方式聯繫我</h1>
            <p style="color: #536166; font-size: 14px; font-weight: 400;">${req.body.information}</p>
          </div>
        </div>
      </div>
      <div style="width: 800px; max-width: 800px; margin: 0 auto; background-color: #536166;">
        <div style="display: flex; justify-content: space-between; padding: 10px;">
          <a href=""><img src=""></a>
          <a href=""><img src=""></a>
          <a href=""><img src=""></a>
          <a href=""><img src=""></a>
        </div>
        <p style="color: #FFF;">
          Tomorrow will be fine. 島島阿學 © 2021.
        </p>
      </div>
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
