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

    public List<Player> getPlayers() {
        return repository.findAll();
    }

    public Player getPlayerById(Long id) {
        return repository.findById(id).orElseThrow(() ->
            new IllegalStateException("Player not found"));
    }

    public List<Player> getPlayerByName(String name) {
        return repository.findByName(name);
    }

    public List<Player> getPlayersByTeam(String team) {
        return repository.findAllByTeam(team);
    }

    public List<Player> getPlayersByPos(String pos) {
        return repository.findAllByPos(pos);
    }

    public List<Player> getPlayersByTeamAndPos(String team, String pos) {
        return repository.findAllByTeamAndPos(team, pos);
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
