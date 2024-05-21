import { useState } from "react";
import { Typography } from "@mui/material";
import {
    Grid,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";

import { Fragment } from "react";
import "./CreateCourseForm.css";
import { useDispatch } from "react-redux";
// import { createProduct } from "../../../Redux/Customers/Product/Action";


const CreateCourseForm = () => {

    const [productData, setProductData] = useState({
        videoUrl: "",
        title: "",
        discountedPrice: "",
        price: "",
        discountPersent: "",
        topLavelCategory: "",
        secondLavelCategory: "",
        thirdLavelCategory: "",
        description: "",
    });
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(createProduct({ data: productData, jwt }))
        console.log(productData);
    };


    return (
        <Fragment className="createProductContainer ">
            <Typography
                variant="h3"
                sx={{ textAlign: "center" }}
                className="py-10 text-center "
            >
                Add New Product
            </Typography>
            <form
                onSubmit={handleSubmit}
                className="createProductContainer min-h-screen"
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Video URL"
                            name="imageUrl"
                            value={productData.videoUrl}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Title"
                            name="title"
                            value={productData.title}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Price"
                            name="price"
                            value={productData.price}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Discounted Price"
                            name="discountedPrice"
                            value={productData.discountedPrice}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            label="Discount Percentage"
                            name="discountPersent"
                            value={productData.discountPersent}
                            onChange={handleChange}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Top Level Category</InputLabel>
                            <Select
                                name="topLavelCategory"
                                value={productData.topLavelCategory}
                                onChange={handleChange}
                                label="Top Level Category"
                            >
                                <MenuItem value="men"></MenuItem>
                                <MenuItem value="women"></MenuItem>
                                <MenuItem value="kids"></MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Second Level Category</InputLabel>
                            <Select
                                name="secondLavelCategory"
                                value={productData.secondLavelCategory}
                                onChange={handleChange}
                                label="Second Level Category"
                            >
                                <MenuItem value="clothing"></MenuItem>
                                <MenuItem value="accessories"></MenuItem>
                                <MenuItem value="brands"></MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <FormControl fullWidth>
                            <InputLabel>Third Level Category</InputLabel>
                            <Select
                                name="thirdLavelCategory"
                                value={productData.thirdLavelCategory}
                                onChange={handleChange}
                                label="Third Level Category"
                            >
                                <MenuItem value="top"></MenuItem>
                                <MenuItem value="women_dress"></MenuItem>
                                <MenuItem value="t-shirts"></MenuItem>
                                <MenuItem value="saree"></MenuItem>
                                <MenuItem value="lengha_choli"></MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Description"
                            multiline
                            name="description"
                            rows={3}
                            onChange={handleChange}
                            value={productData.description}
                        />
                    </Grid>

                    <Grid item xs={12} >
                        <Button
                            variant="contained"
                            sx={{ p: 0.7 }}
                            color="primary"
                            size="large"
                            type="submit"
                        >
                            Add New Product
                        </Button>

                    </Grid>
                </Grid>
            </form>
        </Fragment>
    );
};

export default CreateCourseForm;
