import { Button } from '@mui/material';

function CommentForm() {
  return (
    <form>
      <div>
        Titel: <input type="text" />
      </div>
      <div>
        Innehåll: <textarea rows="5"></textarea>
      </div>
      <Button>Skicka kommentar</Button>
    </form>
  );
}

export default CommentForm;
