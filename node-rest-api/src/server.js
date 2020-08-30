import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Listening port ${port}`);
  console.log(`CTRL + Click in http://localhost:${port}`);
  console.log('CTRL + c to finish the application');
});
