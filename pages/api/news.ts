import { NextApiRequest, NextApiResponse } from 'next';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { News } from '../../Redux/types';

interface Props {
  params: {
    id?: string;
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse<News[] | News>) {
  const filePath = join(process.cwd(), 'Data', 'news.json');
  const fileContents = readFileSync(filePath, 'utf8');
  const news = JSON.parse(fileContents) as News[];

  if (req.method === 'GET') { 
    res.status(200).json(news);
  } else if (req.method === 'POST') {
    const newNewsItem = req.body as News;
    const newId = Date.now().toString();
    const newNews = { ...newNewsItem, id: newId };
    news.push(newNews);
    writeFileSync(filePath, JSON.stringify(news));
    res.status(201).json(newNews);
  } else {
    res.status(405).end();
  }
}