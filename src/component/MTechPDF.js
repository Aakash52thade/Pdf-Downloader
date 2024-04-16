import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { styles } from './styles'; 

const MTechPDF = ({ name, date, referralNumber }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text>Referral Number: {referralNumber}</Text>
        <Text>Name: {name}</Text>
        <Text>Course: M.Tech</Text>
        <Text>Date of Offer: {date}</Text>

        {/* Fees Structure Table */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Year</Text>
            <Text style={styles.tableHeader}>One-time Fees</Text>
            <Text style={styles.tableHeader}>Tuition Fees</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>1</Text>
            <Text style={styles.tableCell}>600</Text>
            <Text style={styles.tableCell}>250</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>2</Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}>250</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default MTechPDF;
