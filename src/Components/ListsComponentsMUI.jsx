import React from 'react'
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material"

function ListsComponentsMUI() {
    const Courses = ["react", "nodJs", "mern"]
  return (
    <>
      <List sx={{width: 250, background: "grey"}}>
        {Courses.map((course)=>(
            <ListItem>
                <ListItemButton>{">"}</ListItemButton>
                <ListItemText primary = {course} />
            </ListItem>
        ))}
      </List>
    </>
  )
}

export default ListsComponentsMUI
