import localforage from "localforage";
import { createContact, deleteContact, updateContact } from "../contact";
import { redirect } from "react-router-dom";

export async function createContactAction() {

  const contacts = await createContact();
  return redirect(`contacts/${contacts.id}/edit`)
   
}

export async function editContactAction({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

export async function deleteAction({ params }) {
    throw new Error("oh dang!");
  await deleteContact(params.contactId);
  return redirect("/");
}
export async function favoriteAction({ request, params }) {
  const formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}