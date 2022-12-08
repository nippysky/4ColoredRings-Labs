import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type SheetForm = {
  name: string;
  email: string;
  passengerID: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST request are allowed" });
  }

  const body = req.body as SheetForm;

  try {
    //Prepare Auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key:
          "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCOhm8xnMi7Fz6o\ne8a2xWX8zu8wWfg33FoYOT2lHtr3mUFH3BIcFTy0AZDQ4/x3kpxml9FueJZj1gFC\n2AwHGTcepP/OyA9YTR5pcK5GH/WSOzpS0zpNEYxlkb33SoEGEpMdP5zT/OqPcG+K\n3WhRrePwmcsuiU4Jft2G0txkUupPE7K1MZqeGX0KhRLft7Et4i78hsqhAUYxjN52\no+bbmhjT5nFGkDcPoNjf44FwDZX8cDgV0NzrKIAjQO3Kq5VqJkuTAlDXKXXJjy1/\nOeqlMrFENzSLXTOoSwS5pEubWH/4kBZLm/Nu7ZADLrDe/DLHsu0hmcGV7qwqGOn/\nbr74E12BAgMBAAECggEACgGEIu6H5SKfooJ2E/TN0S7R+goG9B0DMjoqisIcy082\nFw5rMw+GoHiPqyqmWdqwIj+8U04h+MZYdlHmnkT16q/YybKf6SoY3Xwsr/2kZuzD\njncH28tEmQjfVlIjtsJtE5uYrgVOjl1tZ0ld/oX/v698ZTr8gIwoj0OUd3Kewohb\npzTyMsuvNjLkUPpCqjIxHvAbLjRlJVAzTNqTkkNIiakdAa/qPY8TcOomd2C2swqF\nJ9+wbSCHY12ob3n3pgJ+Lo3n4u5WiQqtecvzzzZ/BjUgsdBmlaIDiI+8k3fKvV0A\nh4IDeIa72RHQGaLBCAmv/Es5GbGBl1MgtDhjSsMENQKBgQDGnH5eVP3bRu1zGFW9\nMhugHCNvk58RR3BFeNecVfqbpMo+zIUgFDhCM4XWzl1gFiIy9E/9UDrpMyyclnBD\nCfZMS+bG8FKdO2uXB5ZvGeQrGMUQXlwcltxXarr0NWlqi67czBLQJMgGjQGh6ivn\nk5iV7n2ov3UJUsPufO7vYpeWkwKBgQC3tS6to4eSv2nb/RlOmIWNiK/MbfFZX/5o\nFKxGPyKWjxvTgp3C0/EvWabeH/s1hhdCXmHdgEdrbuFq5vsbLpq0RbYxjen1zQAd\nwfMuXLgPZQZfNpGtLuNmjsVyJlEcJiz069YzVu617dIwUL06TO8bYzoQqdFrmZZN\nZIEP5UEUGwKBgQCsbj2AJIXpFCEe5ae6hIBbd1KEkkNtuvoMNqfqgPL8ogs8jk+d\n1DAruZOfNLb4rv6uAlJX+InM4LMAl9OLQGDnSJZpbUgsXeRA0UOX3YCsseqVFXcf\nExLlijIZxy1oZTFBXKOQtf47QbyDGE1Z1liJAu9xzBcOKx8UNL80cgJtpQKBgQCp\nJIvO2hM4fT8FitqjL/E/aEucqNmf1a+Suv4HS5gYEbmoG8oPmT6mvx/RwpZ0KHr/\n45Ct9a9MbnHkELnAxD8ynkDrDWQNqetierHhzQK3QegFAGROlS5QvkFzIW5qwYeB\nFidJa9Ar98UgMSaZKD6687iBoSmtrWLi7RebwBQUYwKBgQC8VDoCC3CE8/oBj6Pu\n2QbXUueQ8+n8Ium6XGEXMUUKUJ2UUfZ9X+G7rB5mXN7zmJu7KWv46kf3unA1N5aS\nLChWuyjcsaOLWU6DwJisnGk1NXxWNmrxbiPO33g+PnT5IBqsNJhyC2R1RO+qyurZ\nG/8/ERKfISgX5YwoLf4NLelwXw==\n-----END PRIVATE KEY-----\n"?.replace(
            /\\n/g,
            "\n"
          ),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.name, body.passengerID, body.email, body.message]],
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (error: any) {
    return res
      .status(500)
      .send({ message: error.message ?? "Something went wrong" });
  }
}
