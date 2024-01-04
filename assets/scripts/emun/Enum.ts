export enum AssertPath{
    BG="BgView",
    LOAD="LoadView",
    LOGIN="LoginView",
    UI="UIView",
    GAME="GameView",
    PLAYER="SubPlayer",
    BULLET="SubBullet",
    PROP_HEART="prop/Heart",
    PROP_PROTECT="prop/Protect",
    PROP_BULLET="prop/Bullet",
    PROP_MAPHEART="prop/MapHeart",
    PROP_MAPPROTECT="prop/MapProtect",
    PROP_NINJA="prop/Ninja"
}
export const PropAssert={
    "protected":AssertPath.PROP_MAPPROTECT,
    "heart":AssertPath.PROP_MAPHEART,
    "ninja":AssertPath.PROP_NINJA,
}

export enum EventMsg{
    LOGIN="LOGIN",
    PLAYERINFO="PLAYERINFO",
    INPUTINFO="INPUTINFO",
}

export enum GroupCollider{
    DEFAULT=1,
    BULLTE=2,
    PLAYER=4,
    HEART=8,
    PROTECT=16,
    NINJA=32,
}