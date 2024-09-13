import PropTypes from "prop-types";
import { Button, Tooltip } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";

function ScoreButton({ score, onClick }) {
  return (
    <Tooltip title={`Score ${score}`}>
      <Button
        startIcon={<BarChartIcon />}
        size="small"
        variant="outlined"
        onClick={onClick}
      >
        {score}
      </Button>
    </Tooltip>
  );
}

ScoreButton.propTypes = {
  score: PropTypes.number,
  onClick: PropTypes.func,
};

export default ScoreButton;
