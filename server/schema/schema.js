import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from "graphql";

import Note from "../models/Note.js";

// Note Type
const NoteType = new GraphQLObjectType({
  name: "Note",
  fields: () => ({
    id: { type: GraphQLID },
    writer: { type: GraphQLString },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    note: {
      type: NoteType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Note.findById(args.id);
      },
    },
    notes: {
      type: new GraphQLList(NoteType),
      resolve(parent, args) {
        return Note.find();
      },
    },
  },
});

// Mutations
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addNote: {
      type: NoteType,
      args: {
        writer: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const note = new Note({
          writer: args.writer,
          title: args.title,
          content: args.content,
        });
        return note.save();
      },
    },
    deleteNote: {   // This is not working
      type: NoteType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Note.findByIdAndRemove(args.id);
      },
    },
    updateNote: {   // This is not working too
      type: NoteType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        writer: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return Note.findByIdAndUpdate(
          args.id,
          {
            $set: {
              writer: args.writer,
              title: args.title,
              content: args.content,
            },
          },
          { new: true }
        );
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
