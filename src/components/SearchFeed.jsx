import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm } = useParams();

  useEffect(() => {
    setLoading(true);
    if (searchTerm) {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => {
          setVideos(data.items || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
          setVideos([]);
          setLoading(false);
        });
    }
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search results for: <span style={{ color: '#F31503' }}>{searchTerm}</span>
      </Typography>
      {loading ? (
        <Typography variant='h6' sx={{ color: 'white' }}>
          Loading...
        </Typography>
      ) : (
        <Videos videos={videos} />
      )}
    </Box>
  )
}

export default SearchFeed;