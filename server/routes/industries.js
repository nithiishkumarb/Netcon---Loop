const router = require("express").Router();
const Industries = require("../models/Industries");
const PDFDocument = require("pdfkit");

router.get('/download', async (req, res) => {
    try {
        const industries = await Industries.find({});

        // Create a new PDF document
        const doc = new PDFDocument();
        doc.pipe(res); // Send the PDF as the response

        doc.fontSize(16).text('List of Industries', { align: 'center' }).moveDown(0.8);

        // Table headers
        const headers = ['Index', 'Industry ID', 'Industry Name', 'Industry Place'];

        doc.font('Helvetica-Bold');
        const headerXPositions = [30, 140, 280, 430];
        const headerY = doc.y;

        for (let i = 0; i < headers.length; i++) {
            doc.text(headers[i], headerXPositions[i], headerY,{marginLeft: "50px"});
        }

        doc.moveDown(0.8);

        doc.font('Helvetica');
        const startX = headerXPositions[0];
        let currentY = doc.y;

        for (let i = 0; i < industries.length; i++) {
            const { Industry_ID, Industry_name, Industry_place } = industries[i];

            doc.text(`${i + 1}`, headerXPositions[0], currentY);
            doc.text(Industry_ID, headerXPositions[1], currentY);
            doc.text(Industry_name, headerXPositions[2], currentY);
            doc.text(Industry_place, headerXPositions[3], currentY);

            currentY += 50;
        }
        doc.end();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="industries_list.pdf"');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while generating the PDF.');
    }
});

module.exports = router;
