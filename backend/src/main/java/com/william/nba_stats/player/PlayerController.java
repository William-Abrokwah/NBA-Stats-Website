package com.william.nba_stats.player;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/player")
public class PlayerController {
    private final PlayerService service;

    @Autowired
    public PlayerController(PlayerService service) {
        this.service = service;
    }

    @GetMapping
    public List<Player> getPlayers(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String team,
            @RequestParam(required = false) String pos
    ) {
        return service.getPlayers(name, team, pos);
    }

    @GetMapping("/{id}")
    public Player getPlayerById(@PathVariable Long id) {
        return service.getPlayerById(id);
    }

    @PostMapping
    public Player addPlayer(@RequestBody Player player) {
        return service.addPlayer(player);
    }

    @PutMapping
    public Player updatePlayer(@RequestBody Player player) {
        return service.updatePlayer(player);
    }

    @DeleteMapping("/{id}")
    public void deletePlayer(@PathVariable Long id) {
        service.deletePlayerById(id);
    }
}
