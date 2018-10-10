import axios from "axios";

export const GET_BANNERS = "GET_BANNERS";
export const getBannners = () => {
  return {
    type: GET_BANNERS,
    payload: fetchBanners()
  };
};

const fetchBanners = () => {
  const url = "http://172.104.50.9:3000/api/banner_lists";
  return axios
    .get(url)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const GET_DESTINATIONS = "GET_DESTINATIONS";
export const getDestinations = () => {
  return {
    type: GET_DESTINATIONS,
    payload: fetchDestination()
  };
};

const fetchDestination = () => {
  const url = "http://172.104.50.9:3000/api/destination_lists";
  return axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};


export const GET_REVIEWERS = 'GET_REVIEWERS'
export const getReviewers = () => {
  return {
    type: GET_REVIEWERS,
    payload: fetchReviewer()
  }
}

const fetchReviewer = () => {
  const url = 'http://172.104.50.9:3000/api/reviewer_lists'
  return axios.get(url)
    .then(response => {
      console.log('abc ', response)
      return response.data
    })
    .catch(error => {
      console.log(error)
    })
}


// http://172.104.50.9:3000/api/reviewer_lists

