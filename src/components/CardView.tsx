import React from 'react';

import './CardView.css';

import { Card, Table } from "semantic-ui-react";

import { RowData } from '../interface/app';

interface CardViewProps {
  isLoading: boolean,
  headerContent: string[],
  rowDatas: RowData[]
};

const CardView: React.FunctionComponent<CardViewProps> = (props: CardViewProps) => {
  const { isLoading, headerContent, rowDatas } = props;
  return (
    <div className="card-view">
      <Card.Group centered doubling>
        {isLoading ? "" : rowDatas.map((rowData, index) => {
          return (
            <Card key={index} fluid>
              <Card.Content>
                <Table definition>
                  <Table.Body>
                    {headerContent.map((name, index) => {
                      return (
                        <Table.Row key={index} >
                          <Table.Cell width={4}>{name}</Table.Cell>
                          <Table.Cell>{rowData[name]}</Table.Cell>
                        </Table.Row>
                      )
                    })}
                  </Table.Body>
                </Table>
              </Card.Content>
            </Card>
          )
        })}
      </Card.Group>
    </div>
  );
}

CardView.defaultProps = {
  isLoading: false,
  headerContent: [],
  rowDatas: []
}

export default CardView;
