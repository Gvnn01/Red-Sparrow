## Major adjustments

migrated project to `Nuxt.js`, database temporarily changed to `MySql`

## Configuration

Create a `.env` file, with a `BASEURL` and a `DATABASE_URL` variable, just like is in the `.env.example`

## Setup

Make sure to install the dependencies:

```npm install```

Run the prisma migrations

```npx init```

```npx prisma migrate dev --name init```

Start the developmen server on `http://localhost:3000`: 

```npm run dev```

## How to use

Put the URL into the input;

Click APPLY;

The new URl will redirect to the previous registered URL;