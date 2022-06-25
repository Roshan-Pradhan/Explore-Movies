import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";

export default function ModalMovies({ children, id, media_type }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [singleContent, setSingleContent] = React.useState();

  const infobyID = async () => {
    const infoData = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_MY_KEY}&language=en-US`
    );
    setSingleContent(infoData.data);
  };
  React.useEffect(() => {
    infobyID();
    // eslint-disable-next-line
  }, []);
  // console.log(singleContent);
  return (
    <div>
      <div onClick={handleOpen} className="CardContainer">
        {children}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {singleContent && (
          <div className="modalStyle">
            <img
              src={
                singleContent.poster_path
                  ? `https://image.tmdb.org/t/p/w500${singleContent.poster_path}`
                  : "POSTER UNAVIALABLE"
              }
              alt={singleContent.title || singleContent.name}
              className="modalimg"
            />
            <div className="typoModal">
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="typo1"
              >
                {singleContent.title || singleContent.name}
                <span
                  id="modal-modal-description"
                  style={{ marginLeft: "6px" }}
                >
                  ({singleContent.vote_average})
                  <StarIcon sx={{ fontSize: 20, color: "#fcdc73" }} />
                </span>
              </Typography>
              <Typography variant="body2" sx={{ mt: 0.5 }} className="typo2">
                {media_type === "movie" ? (
                  <>
                    Release Date:
                    {singleContent.release_date
                      ? singleContent.release_date
                      : " Not Found"}
                  </>
                ) : null}
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }} className="typo2">
                {singleContent.overview}
              </Typography>
            </div>

            <CloseIcon
              onClick={handleClose}
              fontSize="large"
              clickable
              className="closeModal"
            />
          </div>
        )}
      </Modal>
    </div>
  );
}
