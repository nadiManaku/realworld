import React from 'react';
import { List, ListItem, Divider, ListItemText, Typography } from '@material-ui/core';
import { IData } from '../../services/fetch';

const ListComponent = (props: any) => {
  const { data } = props;

  return (
    <List>
      {data.map((item: IData, index: any) => (
        <div key={item.id} >
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={item.name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {item.email}
                  </Typography>
                  {item.body}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" /> 
        </div>
      ))}
    </List>
  );
}

export default ListComponent;