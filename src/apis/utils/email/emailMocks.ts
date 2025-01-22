export default class EmailMocks {
  static certaMessage(
    email: string,
    message: string,
  ) {
    return `
        <div style="width:85%;margin:auto;">
            <p style="font-family: 'Roboto', sans-serif;font-size: 1.2em;font-weight: 400;line-height: 1.55;color: #222222;margin: 10px 0 30px;padding: 44px 34px 44px 34px;background-color: #ffffff;border-radius: 8px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 210, 190, 129);">
                Hi <span>Certa</span>,<br><br>
                You are receiving this email becauseof the new case from <b>${email}</b><br /> <br />
                <b>Case: </b>${message}
            </p>
        </div>
      `;
  }
}
