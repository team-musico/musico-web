import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import useGetMe from "../../hooks/auth/useGetMe";
import { useEffect, useState } from "react";
import { removeCookie } from "../../libs/react-cookie/cookie";

const MobileSideMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const getMe = useGetMe();
  const [sideMenuView, setSideMenuView] = useState(false);
  const [closeRequest, setCloseRequest] = useState(false);

  useEffect(() => {
    getMe();
  }, []);

  const logout = () => {
    removeCookie("ACCESS_TOKEN");
    removeCookie("REFRESH_TOKEN");
    navigate("/intro");
  };

  useEffect(() => {
    close();
  }, [location.pathname]);

  const close = () => {
    setCloseRequest(true);
    setTimeout(()=>{
      setSideMenuView(false);
      setCloseRequest(false);
    },600);
  }

  return (
    <S.Container>
      <S.MenuButton
        src="/assets/mobileMenu.svg"
        onClick={() => setSideMenuView(true)}
      />
      <S.Logo src="/assets/musico_reversed.svg" onClick={()=>navigate('/')} />
      {sideMenuView && (
        <S.Shadow onClick={close}>
          <S.SideMenuContainer $closeRequest={closeRequest}>
            <S.CloseWrap>
              <S.Close
                src="/assets/x.svg"
                onClick={close}
              />
            </S.CloseWrap>
            <S.MenuItem to="/" isfocused={`${location.pathname === "/"}`}>
              <S.MeunIcon
                src={
                  location.pathname === "/"
                    ? "/assets/homeIconWhite.svg"
                    : "/assets/homeIcon.svg"
                }
              />
              <S.MenuText>홈</S.MenuText>
            </S.MenuItem>
            <S.MenuItem
              to="/search"
              isfocused={`${location.pathname === "/search"}`}
            >
              <S.MeunIcon
                src={
                  location.pathname === "/search"
                    ? "/assets/searchIconWhite.svg"
                    : "/assets/searchIcon.svg"
                }
              />
              <S.MenuText>검색</S.MenuText>
            </S.MenuItem>
            <S.MenuItem
              to="/newest"
              isfocused={`${location.pathname === "/newest"}`}
            >
              <S.MeunIcon
                src={
                  location.pathname === "/newest"
                    ? "/assets/musicIconWhite.svg"
                    : "/assets/musicIcon.svg"
                }
              />
              <S.MenuText>최신음악</S.MenuText>
            </S.MenuItem>
            <S.MenuItem
              to="/chart"
              isfocused={`${location.pathname === "/chart"}`}
            >
              <S.MeunIcon
                src={
                  location.pathname === "/chart"
                    ? "/assets/chartIconWhite.svg"
                    : "/assets/chartIcon.svg"
                }
              />
              <S.MenuText>차트</S.MenuText>
            </S.MenuItem>
            <S.LogoutWrap onClick={logout}>
              <S.LogoutIcon src="/assets/exit.svg" />
              <S.LogoutText>로그아웃</S.LogoutText>
            </S.LogoutWrap>
          </S.SideMenuContainer>
        </S.Shadow>
      )}
    </S.Container>
  );
};

export default MobileSideMenu;
