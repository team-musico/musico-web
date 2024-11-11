import { useState } from "react";
import { VibeResponse } from "../../types/music/vibeResponse";
import axios from "axios";
import { notification } from "antd";

const useGetRank = () => {
  const [rankData, setRankData] = useState<VibeResponse[]>([]);

  const getRank = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/vibe-chart-top100`
      );

      if (data) {
        setRankData(data);
      }
    } catch {
      notification.error({
        message: "랭킹 가져오기 실패",
        description: "네트워크 에러",
      });
    }
  };

  return {
    rankData,
    getRank,
  };
};

export default useGetRank;
