import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 12rem;
  padding: 1rem 3rem 1rem 0;
  transition: all 0.5s;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  &:hover .cover-overlay {
    opacity: 1;
  }
`;

export const Cover = styled.div<{ src: string }>`
  width: 10rem;
  height: 10rem;
  border-radius: 0.5rem;
  background: url(${(props) => props.src}) center no-repeat;
  background-size: contain;
`;

export const CoverOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
`;

export const MusicInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const MusicTitle = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: #2b2b2b;
  text-overflow: ellipsis;
   white-space: nowrap;
`;

export const MusicArtistWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MusicArtist = styled.p`
  color: gray;
  font-size: 1.6rem;
`;


export const Button = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
`;

export const QueueContainer = styled.div`
  width: 100%;
  height: 8rem;
  padding: 1rem 3rem 1rem 0;
  transition: all 0.5s;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  &:hover .cover-overlay {
    opacity: 1;
  }
`;

export const QueueCover = styled.div<{ src: string }>`
  width: 6rem;
  height: 6rem;
  border-radius: 0.5rem;
  background: url(${(props) => props.src}) center no-repeat;
  background-size: contain;
`;

export const QueueButton = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
  object-position: center;
  cursor: pointer;
`;

export const QueueMusicInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;