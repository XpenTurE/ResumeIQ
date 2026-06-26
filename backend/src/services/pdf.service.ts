import { PDFParse } from 'pdf-parse';

const extractText = async(buffer: Buffer):Promise<string>=>{
    const parser = new PDFParse({ data:buffer });
    const result = await parser.getText();
    console.log(result.text);
    return result.text;
}


export default extractText;
