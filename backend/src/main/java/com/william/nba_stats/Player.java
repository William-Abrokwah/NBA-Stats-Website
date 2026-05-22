package com.william.nba_stats;

import jakarta.persistence.*;

@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id; // Primary key (database unique identifier)

    private Integer rk; // Rank of player in stats list
    private String player; // Player name
    private Integer age; // Player age during season
    private String team; // Team abbreviation (e.g., LAL, GSW)
    private String pos; // Player position (e.g., PG, SG, SF, PF, C)

    private Integer g; // Games played
    private Integer gs; // Games started

    private Double mp; // Minutes played per game (or total depending on dataset)

    private Integer fg; // Field goals made
    private Integer fga; // Field goals attempted
    private Double fgPct; // Field goal percentage

    private Integer threeP; // 3-point shots made
    private Integer threePa; // 3-point shots attempted
    private Double threePct; // 3-point percentage

    private Integer twoP; // 2-point shots made
    private Integer twoPa; // 2-point shots attempted
    private Double twoPct; // 2-point percentage

    private Double efgPct; // Effective field goal percentage

    private Integer ft; // Free throws made
    private Integer fta; // Free throws attempted
    private Double ftPct; // Free throw percentage

    private Integer orb; // Offensive rebounds
    private Integer drb; // Defensive rebounds
    private Integer trb; // Total rebounds

    private Integer ast; // Assists

    private Integer stl; // Steals
    private Integer blk; // Blocks
    private Integer tov; // Turnovers
    private Integer pf; // Personal fouls

    private Integer pts; // Total points scored

    public Player() {
    }

    public Player(Long id, Integer rk, String player, Integer age, String team, String pos, Integer g, Integer gs, Double mp,
                  Integer fg, Integer fga, Double fgPct, Integer threeP, Integer threePa, Double threePct, Integer twoP, Integer twoPa,
                  Double twoPct, Double efgPct, Integer ft, Integer fta, Double ftPct, Integer orb, Integer drb, Integer trb, Integer ast,
                  Integer stl, Integer blk, Integer tov, Integer pf, Integer pts) {
        this.id = id;
        this.rk = rk;
        this.player = player;
        this.age = age;
        this.team = team;
        this.pos = pos;
        this.g = g;
        this.gs = gs;
        this.mp = mp;
        this.fg = fg;
        this.fga = fga;
        this.fgPct = fgPct;
        this.threeP = threeP;
        this.threePa = threePa;
        this.threePct = threePct;
        this.twoP = twoP;
        this.twoPa = twoPa;
        this.twoPct = twoPct;
        this.efgPct = efgPct;
        this.ft = ft;
        this.fta = fta;
        this.ftPct = ftPct;
        this.orb = orb;
        this.drb = drb;
        this.trb = trb;
        this.ast = ast;
        this.stl = stl;
        this.blk = blk;
        this.tov = tov;
        this.pf = pf;
        this.pts = pts;
    }

    public Long getId() {
        return id;
    }

    public Integer getRk() {
        return rk;
    }

    public void setRk(Integer rk) {
        this.rk = rk;
    }

    public String getPlayer() {
        return player;
    }

    public void setPlayer(String player) {
        this.player = player;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public String getPos() {
        return pos;
    }

    public void setPos(String pos) {
        this.pos = pos;
    }

    public Integer getG() {
        return g;
    }

    public void setG(Integer g) {
        this.g = g;
    }

    public Integer getGs() {
        return gs;
    }

    public void setGs(Integer gs) {
        this.gs = gs;
    }

    public Double getMp() {
        return mp;
    }

    public void setMp(Double mp) {
        this.mp = mp;
    }

    public Integer getFg() {
        return fg;
    }

    public void setFg(Integer fg) {
        this.fg = fg;
    }

    public Integer getFga() {
        return fga;
    }

    public void setFga(Integer fga) {
        this.fga = fga;
    }

    public Double getFgPct() {
        return fgPct;
    }

    public void setFgPct(Double fgPct) {
        this.fgPct = fgPct;
    }

    public Integer getThreeP() {
        return threeP;
    }

    public void setThreeP(Integer threeP) {
        this.threeP = threeP;
    }

    public Integer getThreePa() {
        return threePa;
    }

    public void setThreePa(Integer threePa) {
        this.threePa = threePa;
    }

    public Double getThreePct() {
        return threePct;
    }

    public void setThreePct(Double threePct) {
        this.threePct = threePct;
    }

    public Integer getTwoP() {
        return twoP;
    }

    public void setTwoP(Integer twoP) {
        this.twoP = twoP;
    }

    public Integer getTwoPa() {
        return twoPa;
    }

    public void setTwoPa(Integer twoPa) {
        this.twoPa = twoPa;
    }

    public Double getTwoPct() {
        return twoPct;
    }

    public void setTwoPct(Double twoPct) {
        this.twoPct = twoPct;
    }

    public Double getEfgPct() {
        return efgPct;
    }

    public void setEfgPct(Double efgPct) {
        this.efgPct = efgPct;
    }

    public Integer getFt() {
        return ft;
    }

    public void setFt(Integer ft) {
        this.ft = ft;
    }

    public Integer getFta() {
        return fta;
    }

    public void setFta(Integer fta) {
        this.fta = fta;
    }

    public Double getFtPct() {
        return ftPct;
    }

    public void setFtPct(Double ftPct) {
        this.ftPct = ftPct;
    }

    public Integer getOrb() {
        return orb;
    }

    public void setOrb(Integer orb) {
        this.orb = orb;
    }

    public Integer getDrb() {
        return drb;
    }

    public void setDrb(Integer drb) {
        this.drb = drb;
    }

    public Integer getTrb() {
        return trb;
    }

    public void setTrb(Integer trb) {
        this.trb = trb;
    }

    public Integer getAst() {
        return ast;
    }

    public void setAst(Integer ast) {
        this.ast = ast;
    }

    public Integer getStl() {
        return stl;
    }

    public void setStl(Integer stl) {
        this.stl = stl;
    }

    public Integer getBlk() {
        return blk;
    }

    public void setBlk(Integer blk) {
        this.blk = blk;
    }

    public Integer getTov() {
        return tov;
    }

    public void setTov(Integer tov) {
        this.tov = tov;
    }

    public Integer getPf() {
        return pf;
    }

    public void setPf(Integer pf) {
        this.pf = pf;
    }

    public Integer getPts() {
        return pts;
    }

    public void setPts(Integer pts) {
        this.pts = pts;
    }

    @Override
    public String toString() {
        return "PlayerSeasonStats{" +
                "id=" + id +
                ", rk=" + rk +
                ", player='" + player + '\'' +
                ", age=" + age +
                ", team='" + team + '\'' +
                ", pos='" + pos + '\'' +
                ", g=" + g +
                ", gs=" + gs +
                ", mp=" + mp +
                ", fg=" + fg +
                ", fga=" + fga +
                ", fgPct=" + fgPct +
                ", threeP=" + threeP +
                ", threePa=" + threePa +
                ", threePct=" + threePct +
                ", twoP=" + twoP +
                ", twoPa=" + twoPa +
                ", twoPct=" + twoPct +
                ", efgPct=" + efgPct +
                ", ft=" + ft +
                ", fta=" + fta +
                ", ftPct=" + ftPct +
                ", orb=" + orb +
                ", drb=" + drb +
                ", trb=" + trb +
                ", ast=" + ast +
                ", stl=" + stl +
                ", blk=" + blk +
                ", tov=" + tov +
                ", pf=" + pf +
                ", pts=" + pts +
                '}';
    }
}