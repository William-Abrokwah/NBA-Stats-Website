package com.william.nba_stats.player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {
    @Query("""
        SELECT p 
        FROM Player p 
        WHERE (:name IS NULL OR LOWER(p.name) LIKE LOWER(CONCAT('%', CAST(:name AS STRING), '%')))
            AND (:team IS NULL OR LOWER(p.team) LIKE LOWER(CONCAT('%', CAST(:team AS STRING), '%')))
            AND (:pos IS NULL OR LOWER(p.pos) LIKE LOWER(CONCAT('%', CAST(:pos AS STRING), '%')))
    """)
    List<Player> findPlayers(@Param("name") String name, @Param("team") String team, @Param("pos") String pos);
}