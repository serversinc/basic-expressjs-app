
# basic-express

A basic express app with two endpoints.

## API Reference

#### Get Message from Query String

```http
  GET /v1/message
```

| Query String | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `message` | `string` | (required) a message to have sent back to you |

#### Get list of users

```http
  GET /v1/users/
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

| Name | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `PORT` | `number` | (required) The port to run the express app on |

## Run Locally

Clone the project

```bash
  git clone https://github.com/serversinc/basic-expressjs-app
```

Go to the project directory

```bash
  cd basic-expressjs-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Start the development server

```bash
  npm run dev
```

## Deployment

To deploy this project run

```bash
  npm run start
```