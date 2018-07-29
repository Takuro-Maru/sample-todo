import React from 'react';
import {Reboot,
        Button,
        AppBar,
        Toolbar,
        Typography,
        Input,
        List,
        ListItem,
        ListItemText} from 'material-ui/'


export default function TodoApp({ task,tasks,inputTask,addTask,redirectToError }) {
    return (
        <div>
            <Reboot />
            <AppBar position="static">
                <Toolbar>
                    <Typography type="title" color="inherit">
                        Todo
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{padding: '16px'}}>
                <Input onChange={(e) => inputTask(e.target.value)} />
                <Button raised color="secondary" onClick={() => addTask(task)}>add</Button>
                <List>
                    {
                        tasks.map(
                            function(item,i){
                                return (
                                    <ListItem key={i}>
                                        <ListItemText primary={`・${item}`} />
                                    </ListItem>
                                );
                            }
                        )
                    }
                </List>
            </div>
        </div>
    );
}