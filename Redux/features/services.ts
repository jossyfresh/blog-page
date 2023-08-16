"use client";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { News } from '../types';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getNews: builder.query<News[], void>({
      query: () => '/news',
    }),
    createNews: builder.mutation<News, Partial<News>>({
      query: (news) => ({
        url: '/news',
        method: 'POST',
        body: news,
      }),
    }),
    updateNews: builder.mutation<News, Partial<News> & { id: string }>({
      query: ({ id, ...news }) => ({
        url: `/news/${id}`,
        method: 'PUT',
        body: news,
      }),
    }),
    deleteNews: builder.mutation<void, string>({
      query: (id) => ({
        url: `/news/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetNewsQuery,useCreateNewsMutation, useUpdateNewsMutation,useDeleteNewsMutation } = newsApi;