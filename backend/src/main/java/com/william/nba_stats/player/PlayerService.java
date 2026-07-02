package com.william.nba_stats.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class PlayerService {
    private final PlayerRepository repository;

    @Autowired
    public PlayerService(PlayerRepository repository) {
        this.repository = repository;
    }

    private String normalize(String value) {
        return ((value == null || value.isBlank()) ? null : value.trim());
    }

    public List<Player> getPlayers(String name, String team, String pos) {
       return repository.findPlayers(normalize(name), normalize(team), normalize(pos));
    }

    public Player getPlayerById(Long id) {
        return repository.findById(id).orElseThrow(() ->
            new IllegalStateException("Player not found"));
    }

    @Transactional
    public Player addPlayer(Player player) {
        repository.save(player);
        return player;
    }

    @Transactional
    public Player updatePlayer(Player newPlayer) {
        Player oldPlayer = getPlayerById(newPlayer.getId());
        oldPlayer.updatePlayer(newPlayer);
        return repository.save(oldPlayer);
    }

    @Transactional
    public void deletePlayerById(Long id) {
        repository.deleteById(id);
    }
}
