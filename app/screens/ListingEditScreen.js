import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import listingApi from "../api/listings";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least 1 image"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "book-open-page-variant",
    label: "Old",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "book-open-variant",
    label: "New",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "book-open-page-variant",
    label: "IT",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "book-open-variant",
    label: "Matric",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "book-open-page-variant",
    label: "Inter",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "book-open-variant",
    label: "Islamic",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "book-open-page-variant",
    label: "Noval",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListingEditScreen() {
  const location = useLocation();

  const handleSubmit = async (listing, { resetForm }) => {
    const result = await listingApi.addListing({ ...listing, location });

    if (!result.ok) {
      return alert("Could not save the listing.");
    }
    alert("Uploaded succesfully");
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
