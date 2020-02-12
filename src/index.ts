import app from './app'

const { 
  PORT = 3000
} = process.env;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log('App started at http://localhost:'+PORT);
  });
}

export default app