"use server"

import { getUser } from "@/auth/server";
import { prisma } from "@/db/prisma";
import { handleError } from "@/lib/utils";

export const updateNoteAction = async (noteId: string, text: string) => {
    try {
        const user = await getUser();
        if (!user) throw new Error("you must be logged in to update a note");

        await prisma.note.update({
            where: {
                id: noteId
            },
            data: {
                text: text,
            }
        })
        return { errorMessage: null };
    } catch (error) {
        return handleError(error)
    }

}
export const createNoteAction = async (noteId: string) => {
    try {
        const user = await getUser();
        if (!user) throw new Error("you must be logged in to create a note");

        await prisma.note.create({
            data: {
                id: noteId,
                authorId: user.id,
                text: "",
            }
        })
        return { errorMessage: null };
    } catch (error) {
        return handleError(error)
    }

} 
export const deleteNoteAction = async (noteId: string) => {
    try {
        const user = await getUser();
        if (!user) throw new Error("you must be logged in to delete a note");

        await prisma.note.delete({
            where: {
                id: noteId,
                authorId: user.id,
               
            }
        })
        return { errorMessage: null };
    } catch (error) {
        return handleError(error)
    }

} 
export const askAIAboutNotesAction = async (newQuestions:string[], responses:string[]) => {
    try {
        const user = await getUser();
        if (!user) throw new Error("you must be logged in to ask ai question about  note");

       const notes  = await prisma.note.findMany({
            where:{authorId:user.id},
            orderBy:{createdAt:"desc"},
            select:{text:true,createdAt:true,updatedAt:true}
        })

        if (notes.length===0) {
            return "You don't have any notes yet "
        }

        const formattedNotes = notes.map((note)=>(
            `Text : ${note.text}
            CreatedAt:${note.createdAt}
            Last Updated:${note.updatedAt}
            
            `.trim()
        )).join('\n');

        return { errorMessage: null };
    } catch (error) {
        return handleError(error)
    }

} 