package com.william.nba_stats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {
    List<Player> findByName(String name);
    List<Player> findAllByTeam(String team);
    List<Player> findAllByPos(String pos);
    List<Player> findAllByTeamAndPos(String team, String pos);
}
