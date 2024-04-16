import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import BTechPDF from './BTechPDF';
import MTechPDF from './MTechPDF';
import './pdfStyles.css'; 

const FormToPDF = () => {
  // Define the generateReferralNumber function
  const generateReferralNumber = (index) => {
    const prefix = String.fromCharCode(65 + index); 
    return `${prefix}101`;
  };

  const [name, setName] = useState('');
  const [course, setCourse] = useState('B.tech');
  const [currentDate] = useState(new Date().toLocaleDateString());
  const referralNumber = course === 'B.tech' ? generateReferralNumber(0) : generateReferralNumber(1);

  return (
    <div className="container">
      <h1>Generate Course PDF</h1>
      <input
        className="input-field"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <select className="select-field" value={course} onChange={e => setCourse(e.target.value)}>
        <option value="B.tech">B.Tech</option>
        <option value="M.tech">M.Tech</option>
      </select>

      {course === 'B.tech' ? (
        <PDFDownloadLink
          document={<BTechPDF name={name} date={currentDate} referralNumber={referralNumber} />}
          fileName="btech-offer.pdf"
          className="download-link">
          {({ loading }) => (loading ? 'Loading document...' : 'Download B.Tech PDF')}
        </PDFDownloadLink>
      ) : (
        <PDFDownloadLink
          document={<MTechPDF name={name} date={currentDate} referralNumber={referralNumber} />}
          fileName="mtech-offer.pdf"
          className="download-link">
          {({ loading }) => (loading ? 'Loading document...' : 'Download M.Tech PDF')}
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default FormToPDF;
