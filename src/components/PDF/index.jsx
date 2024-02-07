import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import { Html } from "react-pdf-html";

export const PDF = () => {
    const html = `
        <table>
            <tr>
                <td>Total de visitantes: </td>
                <td>1000</td>
            </tr>
            <tr>
                <td>Total de visitantes Masculinos: </td>
                <td>200</td>
            </tr>
            <tr>
                <td>Total de visitantes Femininos: </td>
                <td>600</td>
            </tr>
        </table
    `;
    const css = StyleSheet.create({
        page: {
            padding: 60
        },
        title: {
            color: "red"
        }
    });
    return (
        <Document>
            <Page size="A4" style={css.page}>
                <View>
                    <Html>
                        {html}
                    </Html>
                </View>
            </Page>
        </Document>
    );
}

