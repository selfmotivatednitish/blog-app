import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Grid, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { addBlog } from "../../features/blogData/blogSlice";

export const AddBlog = (props) => {
    const { setOpen } = props
    const blogs = useSelector((state) => state.blogs.blogs);
    const dispatch = useDispatch();

    const [newData, setNewData] = useState({
        id: uuid(),
        title: '',
        category: '',
        description: '',
    })

    useEffect(() => {
        console.log(blogs, 'blogs')
    }, [blogs])

    const onBlogSave = () => {
        dispatch(addBlog(newData));
        setOpen(false);
    }

    return (
        <Card sx={{ margin: '10px' }}>
            <CardActionArea>
                <CardContent>
                    <Typography textAlign={"center"} gutterBottom variant="h5" component="div">
                        Add Blog
                    </Typography>
                    <Grid
                        sx={{
                            marginBottom: '10px',
                        }}
                    >
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Title"
                            variant="outlined"
                            value={newData.title}
                            onInput={(event) => setNewData({
                                ...newData,
                                title: event.target.value,
                            })}
                        />
                    </Grid>
                    <Grid
                        sx={{
                            marginBottom: '10px',
                        }}
                    >
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Category"
                            variant="outlined"
                            value={newData.category}
                            onInput={(event) => setNewData({
                                ...newData,
                                category: event.target.value,
                            })}
                        />
                    </Grid>
                    <Grid>
                        <TextField
                            fullWidth
                            id="outlined-textarea"
                            label="Description"
                            placeholder="Add description"
                            variant="outlined"
                            multiline
                            value={newData.description}
                            onInput={(event) => setNewData({
                                ...newData,
                                description: event.target.value,
                            })}
                        />
                    </Grid>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{
                display: 'flex',
                flexDirection: 'row-reverse'
            }}>
                <Button size="small" color="primary" onClick={onBlogSave}>
                    Save
                </Button>
            </CardActions>
        </Card>
    )
}