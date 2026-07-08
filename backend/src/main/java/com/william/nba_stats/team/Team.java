package com.william.nba_stats.team;

import jakarta.persistence.*;

@Entity
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Primary key (database unique identifier)

    private String tabb; // Team abbreviation (e.g., LAL, GSW)
    private Integer g; // Games played
    private Integer gs; // Games started

    private Double mp; // Minutes played per game (or total depending on dataset)

    private Double fg; // Field goals made
    private Double fga; // Field goals attempted
    private Double fg_pct; // Field goal percentage

    private Double threep; // 3-point shots made
    private Double threepa; // 3-point shots attempted
    private Double threep_pct; // 3-point percentage

    private Double twop; // 2-point shots made
    private Double twopa; // 2-point shots attempted
    private Double twop_pct; // 2-point percentage

    private Double efg_pct; // Effective field goal percentage

    private Double ft; // Free throws made
    private Double fta; // Free throws attempted
    private Double ft_pct; // Free throw percentage

    private Double orb; // Offensive rebounds
    private Double drb; // Defensive rebounds
    private Double trb; // Total rebounds

    private Double ast; // Assists

    private Double stl; // Steals
    private Double blk; // Blocks
    private Double tov; // Turnovers
    private Double pf; // Personal fouls

    private Double pts; // Total points scored

    public Team() {
    }

    public Team(Long id, String tabb, Integer g, Integer gs, Double mp, Double fg, Double fga, Double fg_pct,
                Double threep, Double threepa, Double threep_pct, Double twop, Double twopa, Double twop_pct,
                Double efg_pct, Double ft, Double fta, Double ft_pct, Double orb, Double drb, Double trb, Double ast,
                Double stl, Double blk, Double tov, Double pf, Double pts) {
        this.id = id;
        this.tabb = tabb;
        this.g = g;
        this.gs = gs;
        this.mp = mp;
        this.fg = fg;
        this.fga = fga;
        this.fg_pct = fg_pct;
        this.threep = threep;
        this.threepa = threepa;
        this.threep_pct = threep_pct;
        this.twop = twop;
        this.twopa = twopa;
        this.twop_pct = twop_pct;
        this.efg_pct = efg_pct;
        this.ft = ft;
        this.fta = fta;
        this.ft_pct = ft_pct;
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

    public String getTabb() {
        return tabb;
    }

    public Integer getG() {
        return g;
    }

    public Integer getGs() {
        return gs;
    }

    public Double getMp() {
        return mp;
    }

    public Double getFg() {
        return fg;
    }

    public Double getFga() {
        return fga;
    }

    public Double getFg_pct() {
        return fg_pct;
    }

    public Double getThreep() {
        return threep;
    }

    public Double getThreepa() {
        return threepa;
    }

    public Double getThreep_pct() {
        return threep_pct;
    }

    public Double getTwop() {
        return twop;
    }

    public Double getTwopa() {
        return twopa;
    }

    public Double getTwop_pct() {
        return twop_pct;
    }

    public Double getEfg_pct() {
        return efg_pct;
    }

    public Double getFt() {
        return ft;
    }

    public Double getFta() {
        return fta;
    }

    public Double getFt_pct() {
        return ft_pct;
    }

    public Double getOrb() {
        return orb;
    }

    public Double getDrb() {
        return drb;
    }

    public Double getTrb() {
        return trb;
    }

    public Double getAst() {
        return ast;
    }

    public Double getStl() {
        return stl;
    }

    public Double getBlk() {
        return blk;
    }

    public Double getTov() {
        return tov;
    }

    public Double getPf() {
        return pf;
    }

    public Double getPts() {
        return pts;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTabb(String tabb) {
        this.tabb = tabb;
    }

    public void setG(Integer g) {
        this.g = g;
    }

    public void setGs(Integer gs) {
        this.gs = gs;
    }

    public void setMp(Double mp) {
        this.mp = mp;
    }

    public void setFg(Double fg) {
        this.fg = fg;
    }

    public void setFga(Double fga) {
        this.fga = fga;
    }

    public void setFg_pct(Double fg_pct) {
        this.fg_pct = fg_pct;
    }

    public void setThreep(Double threep) {
        this.threep = threep;
    }

    public void setThreepa(Double threepa) {
        this.threepa = threepa;
    }

    public void setThreep_pct(Double threep_pct) {
        this.threep_pct = threep_pct;
    }

    public void setTwop(Double twop) {
        this.twop = twop;
    }

    public void setTwopa(Double twopa) {
        this.twopa = twopa;
    }

    public void setTwop_pct(Double twop_pct) {
        this.twop_pct = twop_pct;
    }

    public void setEfg_pct(Double efg_pct) {
        this.efg_pct = efg_pct;
    }

    public void setFt(Double ft) {
        this.ft = ft;
    }

    public void setFta(Double fta) {
        this.fta = fta;
    }

    public void setFt_pct(Double ft_pct) {
        this.ft_pct = ft_pct;
    }

    public void setOrb(Double orb) {
        this.orb = orb;
    }

    public void setDrb(Double drb) {
        this.drb = drb;
    }

    public void setTrb(Double trb) {
        this.trb = trb;
    }

    public void setAst(Double ast) {
        this.ast = ast;
    }

    public void setStl(Double stl) {
        this.stl = stl;
    }

    public void setBlk(Double blk) {
        this.blk = blk;
    }

    public void setTov(Double tov) {
        this.tov = tov;
    }

    public void setPf(Double pf) {
        this.pf = pf;
    }

    public void setPts(Double pts) {
        this.pts = pts;
    }

    public void updateTeam(Team updatedTeam) {
        this.setId(updatedTeam.getId());
        this.setTabb(updatedTeam.getTabb());
        this.setG(updatedTeam.getG());
        this.setGs(updatedTeam.getGs());
        this.setMp(updatedTeam.getMp());
        this.setFg(updatedTeam.getFg());
        this.setFga(updatedTeam.getFga());
        this.setFg_pct(updatedTeam.getFg_pct());
        this.setThreep(updatedTeam.getThreep());
        this.setThreepa(updatedTeam.getThreepa());
        this.setThreep_pct(updatedTeam.getThreep_pct());
        this.setTwop(updatedTeam.getTwop());
        this.setTwopa(updatedTeam.getTwopa());
        this.setTwop_pct(updatedTeam.getTwop_pct());
        this.setEfg_pct(updatedTeam.getEfg_pct());
        this.setFt(updatedTeam.getFt());
        this.setFta(updatedTeam.getFta());
        this.setFt_pct(updatedTeam.getFt_pct());
        this.setOrb(updatedTeam.getOrb());
        this.setDrb(updatedTeam.getDrb());
        this.setTrb(updatedTeam.getTrb());
        this.setAst(updatedTeam.getAst());
        this.setStl(updatedTeam.getStl());
        this.setBlk(updatedTeam.getBlk());
        this.setTov(updatedTeam.getTov());
        this.setPf(updatedTeam.getPf());
        this.setPts(updatedTeam.getPts());
    }

    @Override
    public String toString() {
        return "Team{" +
                "id=" + id +
                ", tabb='" + tabb + '\'' +
                ", g=" + g +
                ", gs=" + gs +
                ", mp=" + mp +
                ", fg=" + fg +
                ", fga=" + fga +
                ", fg_pct=" + fg_pct +
                ", threep=" + threep +
                ", threepa=" + threepa +
                ", threep_pct=" + threep_pct +
                ", twop=" + twop +
                ", twopa=" + twopa +
                ", twop_pct=" + twop_pct +
                ", efg_pct=" + efg_pct +
                ", ft=" + ft +
                ", fta=" + fta +
                ", ft_pct=" + ft_pct +
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
