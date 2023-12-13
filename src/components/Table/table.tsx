import React from 'react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';
import "./table.css";

interface TableComponentProps {
  numRows: number;
  numCols: number;
  cellContents: (string | JSX.Element)[];
  headerContent: string; // add new header
}

const TableComponent: React.FC<TableComponentProps> = ({ numRows, numCols, cellContents, headerContent }) => { // Tambahkan headerContent di sini
  const rows = Array.from({ length: numRows }, (_, i) => (
    <IonRow key={i}>
      <IonCol className="myTable numberColumn"> {/* colm new */}
        {i + 1}
      </IonCol>
      {Array.from({ length: numCols }, (_, j) => (
        <IonCol key={j} className="myTable">
          {typeof cellContents[i * numCols + j] === 'string' ? cellContents[i * numCols + j] : null}
        </IonCol>
      ))}
    </IonRow>
  ));

  return (
    <IonGrid>
      <IonRow> {/* line top */}
        <IonCol className="myTable numberColumn">
          Nomor
        </IonCol>
        <IonCol className="myTable">
          {headerContent} 
        </IonCol>
      </IonRow>
      {rows}
    </IonGrid>
  );
};

export default TableComponent;
