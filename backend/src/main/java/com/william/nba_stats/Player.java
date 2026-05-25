package com.william.nba_stats;

import jakarta.persistence.*;

@Entity
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // Primary key (database unique identifier)

    private Integer rk; // Rank of player in stats list
    private String player; // Player name
    private Integer age; // Player age during season
    private String team; // Team abbreviation (e.g., LAL, GSW)
    private String pos; // Player position (e.g., PG, SG, SF, PF, C)

    private Integer g; // Games played
    private Integer gs; // Games started

    private Double mp; // Minutes played per game (or total depending on dataset)

    private Double fg; // Field goals made
    private Double fg_avg; // Field goals attempted
    private Double fg_pct; // Field goal percentage

    private Double threep; // 3-point shots made
    private Double threep_avg; // 3-point shots attempted
    private Double threep_pct; // 3-point percentage

    private Double twop; // 2-point shots made
    private Double twop_avg; // 2-point shots attempted
    private Double twop_pct; // 2-point percentage

    private Double efg_pct; // Effective field goal percentage

    private Double ft; // Free throws made
    private Double ft_avg; // Free throws attempted
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

    public Player() {
    }

    public Player(Long id, Integer rk, String player, Integer age, String team, String pos, Integer g,
                  Integer gs, Double mp, Double fg, Double fg_avg, Double fg_pct, Double threep,
                  Double threep_avg, Double threep_pct, Double twop, Double twop_avg, Double twop_pct,
                  Double efg_pct, Double ft, Double ft_avg, Double ft_pct, Double orb, Double drb, Double trb,
                  Double ast, Double stl, Double blk, Double tov, Double pf, Double pts) {
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
        this.fg_avg = fg_avg;
        this.fg_pct = fg_pct;
        this.threep = threep;
        this.threep_avg = threep_avg;
        this.threep_pct = threep_pct;
        this.twop = twop;
        this.twop_avg = twop_avg;
        this.twop_pct = twop_pct;
        this.efg_pct = efg_pct;
        this.ft = ft;
        this.ft_avg = ft_avg;
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

    public Integer getRk() {
        return rk;
    }

    public String getPlayer() {
        return player;
    }

    public Integer getAge() {
        return age;
    }

    public String getTeam() {
        return team;
    }

    public String getPos() {
        return pos;
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

    public Double getFg_avg() {
        return fg_avg;
    }

    public Double getFg_pct() {
        return fg_pct;
    }

    public Double getThreep() {
        return threep;
    }

    public Double getThreep_avg() {
        return threep_avg;
    }

    public Double getThreep_pct() {
        return threep_pct;
    }

    public Double getTwop() {
        return twop;
    }

    public Double getTwop_avg() {
        return twop_avg;
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

    public Double getFt_avg() {
        return ft_avg;
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

    @Override
    public String toString() {
        return "Player{" +
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
                ", fg_avg=" + fg_avg +
                ", fg_pct=" + fg_pct +
                ", threep=" + threep +
                ", threep_avg=" + threep_avg +
                ", threep_pct=" + threep_pct +
                ", twop=" + twop +
                ", twop_avg=" + twop_avg +
                ", twop_pct=" + twop_pct +
                ", efg_pct=" + efg_pct +
                ", ft=" + ft +
                ", ft_avg=" + ft_avg +
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